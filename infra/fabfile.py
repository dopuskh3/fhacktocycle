
from fabric.api import run, env, sudo, cd, put

env.use_ssh_config = True

PACKAGES=[
  'g++',
  'cpp',
  'libicu-dev', 'libicu48',
  'python-dev',
  'libboost-system-dev',
  'libboost-filesystem-dev',
  'libboost-iostreams-dev',
  'libboost-thread-dev',
  'libboost-python-dev',
  'libboost-program-options-dev',
  'libboost-regex-dev',
  'libxml2', 'libxml2-dev',
  'libfreetype6', 'libfreetype6-dev',
  'libjpeg8', 'libjpeg8-dev',
  'libpng12-0', 'libpng12-dev',
  'libtiff5', 'libtiff5-dev',
  'libltdl7', 'libltdl-dev',
  'libproj0', 'libproj-dev',
  'libcairo2', 'libcairo2-dev', 'python-cairo', 'python-cairo-dev',
  'libcairomm-1.0-1', 'libcairomm-1.0-dev',
  'ttf-dejavu', 'ttf-dejavu-core', 'ttf-dejavu-extra', 'ttf-unifont',
  'postgresql', 'postgresql-server-dev-9.1', 'postgresql-contrib',
  'libgdal1-dev', 'python-gdal',
  'postgresql-9.1-postgis', 'libsqlite3-dev',
  'subversion', 'build-essential', 'python-nose',
  'postgresql-9.1-postgis',
  'python-pip',
  'libjpeg8',
  'libjpeg-dev',
  'libfreetype6',
  'libfreetype6-dev',
  'zlib1g-dev',
  'nginx',
  'openssl',
  'libgdal1',
  'gcc',
  'rsync',
  'libpq-dev',
  'libgeos-3.3.3',
  'libgeos-c1',
  'libgeos-dev',
  'git-core',
  'osm2pgsql',
  'apache2']


def preconfigure():
  run("apt-get -y --force-yes install sudo")

def installDepPackages():
  run("apt-get -y --force-yes install %s" % ' '.join(PACKAGES))


def createDatabase():
  with cd('/tmp'):
    sudo("createuser gisuser || true", user='postgres')
    sudo("createdb --encoding=UTF8 --owner=gisuser gis", user='postgres')

def enablePostGIS():
  with cd('/tmp'):
    sudo('psql --username=postgres --dbname=gis --file=/usr/share/postgresql/9.1/contrib/postgis-1.5/postgis.sql', user='postgres')
    sudo('psql --username=postgres --dbname=gis --file=/usr/share/postgresql/9.1/contrib/postgis-1.5/spatial_ref_sys.sql', user='postgres')
    sudo('psql --username=postgres --dbname=gis --command="ALTER TABLE geometry_columns OWNER TO gisuser"', user='postgres')
    sudo('psql --username=postgres --dbname=gis --command="ALTER TABLE spatial_ref_sys OWNER TO gisuser"', user='postgres')

def installMapnik():
  sudo("apt-get -y --force-yes install python-mapnik2 libmapnik2-dev tilelite python-software-properties")

def installModTile():
  sudo("apt-get -y --force-yes install autoconf automake autogen apache2-prefork-dev")
  with cd('/tmp'):
    run("rm -Rf mod_tile && git clone https://github.com/openstreetmap/mod_tile/")
  with cd('/tmp/mod_tile'):
    run("./autogen.sh")
    run("./configure")
    run("make")
    sudo("make install")
    sudo("make install-mod_tile")
    sudo("ldconfig")


def configureTileServer():
  put("conf/mod_tile.conf", "/etc/apache2/mods-enabled")
  put("conf/renderd.conf", "/etc/renderd.conf")
  sudo("/etc/init.d/apache2 reload")


def configure():
  installDepPackages()
  createDatabase()
  enablePostGIS()
  installMapnik()
