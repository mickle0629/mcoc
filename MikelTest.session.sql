SELECT ST.shoename, AvS.shoesize, AvS.inventory, AvS.numsold
FROM shoetype AS ST, available_shoe AS AvS
WHERE AvS.shoetype = 1 AND ST.shoetypeid = AvS.shoetype;

SELECT ST.shoename, AvS.shoesize, AvS.inventory, AvS.numsold
FROM shoetype AS ST, available_shoe AS AvS
WHERE AvS.shoetype = 3 AND ST.shoetypeid = AvS.shoetype;

SELECT ST.shoename, AvS.shoesize, AvS.inventory, AvS.numsold
FROM shoetype AS ST, available_shoe AS AvS
WHERE AvS.shoetype = 5 AND ST.shoetypeid = AvS.shoetype;

SELECT ST.shoename, AvS.shoesize, AvS.inventory, AvS.numsold
FROM shoetype AS ST, available_shoe AS AvS
WHERE AvS.shoetype = 2 AND ST.shoetypeid = AvS.shoetype;

SELECT ST.shoename, AvS.shoesize, AvS.inventory, AvS.numsold
FROM shoetype AS ST, available_shoe AS AvS
WHERE AvS.shoetype = 4 AND ST.shoetypeid = AvS.shoetype;

SELECT ST.shoename, AvS.shoesize, AvS.inventory, AvS.numsold
FROM shoetype AS ST, available_shoe AS AvS
WHERE AvS.shoetype = 6 AND ST.shoetypeid = AvS.shoetype;
