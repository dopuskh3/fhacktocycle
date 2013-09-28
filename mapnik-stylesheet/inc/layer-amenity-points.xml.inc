<Style name="points">
    <Rule>
      &maxscale_zoom17;
      <Filter>[amenity]='bicycle_rental'</Filter>
      <PointSymbolizer file="&symbols;/rental_bicycle.p.20.png" placement="interior"/>
    </Rule>
    <Rule>
      &maxscale_zoom16;
      <Filter>[tourism]='information'</Filter>
      <PointSymbolizer file="&symbols;/information.p.16.png" placement="interior"/>
    </Rule>
    <Rule>
      &maxscale_zoom17;
      <Filter>[tourism]='museum'</Filter>
      <PointSymbolizer file="&symbols;/museum.p.16.png" placement="interior"/>
    </Rule>
    <Rule>
      &maxscale_zoom17;
      <Filter>[amenity]='theatre'</Filter>
      <PointSymbolizer file="&symbols;/theatre.p.20.png" placement="interior"/>
    </Rule>
    <Rule>
      &maxscale_zoom17;
      <Filter>[amenity]='toilets'</Filter>
      <PointSymbolizer file="&symbols;/toilets.p.20.png" placement="interior"/>
    </Rule>
    <Rule>
      &maxscale_zoom17; 
      <Filter>[amenity]='drinking_water'</Filter> 
      <PointSymbolizer file="&symbols;/food_drinkingtap.p.20.png" placement="interior"/>
    </Rule> 
    <Rule>
      &maxscale_zoom17;
      <Filter>[shop]='bicycle'</Filter>
      <PointSymbolizer file="&symbols;/shopping_bicycle.p.16.png" placement="interior"/>
    </Rule>
    <Rule>
      &maxscale_zoom17;
      <Filter>[shop]='gift'</Filter>
      <PointSymbolizer file="&symbols;/shop_gift.p_16.png" placement="interior"/>
    </Rule>
</Style>

<Layer name="amenity-points" status="on" srs="&osm2pgsql_projection;">
    <StyleName>points</StyleName>
    <Datasource>
      <Parameter name="table">
      (select way,amenity,shop,tourism,highway,man_made,access,religion,waterway,lock,historic,leisure
      from &prefix;_point
      where amenity is not null
         or shop is not null
         or tourism in ('alpine_hut','camp_site','caravan_site','guest_house','hostel','hotel','motel','museum','viewpoint','bed_and_breakfast','information','chalet')
         or highway in ('bus_stop','traffic_signals','ford')
         or man_made in ('mast','water_tower')
         or historic in ('memorial','archaeological_site')
         or waterway='lock'
         or lock='yes'
         or leisure in ('playground','slipway')
      ) as points</Parameter>
      &datasource-settings;
    </Datasource>
</Layer>
<Layer name="amenity-points-poly" status="on" srs="&osm2pgsql_projection;">
    <StyleName>points</StyleName>
    <Datasource>
      <Parameter name="table">
      (select way,amenity,shop,tourism,highway,man_made,access,religion,waterway,lock,historic,leisure
      from &prefix;_polygon
      where amenity is not null
         or shop is not null
         or tourism in ('alpine_hut','camp_site','caravan_site','guest_house','hostel','hotel','motel','museum','viewpoint','bed_and_breakfast','information','chalet')
         or highway in ('bus_stop','traffic_signals')
         or man_made in ('mast','water_tower')
         or historic in ('memorial','archaeological_site')
         or leisure='playground'
      ) as points</Parameter>
      &datasource-settings;
    </Datasource>
</Layer>
