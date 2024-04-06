-- These queries are for seeding the database, should we ever have to clear it again.
-- Run these blocks one-by-one.
-- @block
DROP TABLE IF EXISTS parent;

CREATE TABLE parent (
  idParent SERIAL PRIMARY KEY,
  Fname varchar(45) DEFAULT NULL,
  Lname varchar(45) DEFAULT NULL,
  Email varchar(45) UNIQUE DEFAULT NULL,
  Phone varchar(45) UNIQUE DEFAULT NULL,
  Zip varchar(45) DEFAULT NULL
);

-- @block
INSERT INTO parent(idParent, Fname, Lname, Email, Phone, Zip) 
  VALUES ('Dante','Stokes','dstokes24@my.whitworth.edu','',NULL),
         ('Pete','Tucker','ptucker@my.whitworth.edu',NULL,NULL),
         (NULL,NULL,NULL,NULL,NULL),
         ('Seth','Miller','smiller24@my.whitworth.edu','5096724231','94536'),
         ('Adam','Johnson','ajohnson@gmail.com','5098432145','99921'),
         ('Richard','Jefferson','rjefferson@gmail.com','5098734122','98123'),
         ('Dame','Lillard','dlillard@adidas','96712342','94536');

-- @block
CREATE TABLE child (
  idChild SERIAL PRIMARY KEY,
  idParent INT,
  fname VARCHAR(45),
  lname VARCHAR(45),
  age VARCHAR(45),
  dob TIMESTAMP,
  grade VARCHAR(45),
  shoeType VARCHAR(45),
  shoeSize VARCHAR(45),
  SchoolAttending VARCHAR(45),
  CONSTRAINT idChild_UNIQUE UNIQUE (idChild),
  CONSTRAINT ParentID FOREIGN KEY (idParent) REFERENCES parent(idParent)
);

-- @block
INSERT INTO child(idParent, fname, lname, age, dob, grade, shoeType, shoeSize, SchoolAttending) 
  VALUES (1,'Steven','Rhodes','16','2024-03-13 00:00:00','10',NULL,'12','Mead High School'),
         (1,'Tommy','Jones','16','2024-03-14 00:00:00','10','6','12','Mead High School'),
         (4,'Johnny','Jones','12','2024-03-28 00:00:00','5','2','5','Whitworth University'),
         (4,'Justin','Murio','21','2024-03-28 00:00:00','13','4','12','San Jose State University');

-- @block
CREATE TABLE shoetype (
  ShoeTypeID SERIAL PRIMARY KEY,
  ShoeName varchar(45) DEFAULT NULL,
  CONSTRAINT ShoeTypeID_UNIQUE UNIQUE (ShoeTypeID)
);

-- @block
INSERT INTO shoetype(ShoeName)
  VALUES ('Toddler Girls'), ('Toddler Boys'), ('Girl'), ('Boy'), ('Women'), ('Men');

-- @block
CREATE TABLE available_shoe (
  ShoeID SERIAL PRIMARY KEY,
  ShoeType int DEFAULT NULL,
  ShoeSize int DEFAULT NULL,
  CONSTRAINT ShoeID_UNIQUE UNIQUE (ShoeID),
  CONSTRAINT ShoeTypeID FOREIGN KEY (ShoeType) REFERENCES shoetype(ShoeTypeID)
);

-- @block
INSERT INTO available_shoe(ShoeType, ShoeSize)
  VALUES (6, 12),
         (3, 6),
         (5, 11),
         (4, 8)

-- @block
CREATE TABLE orders (
  OrderID SERIAL PRIMARY KEY,
  ShoeID int DEFAULT NULL,
  idChild int DEFAULT NULL,
  idParent int DEFAULT NULL,
  OrderDate TIMESTAMP DEFAULT NULL,
  CONSTRAINT OrderID_UNIQUE UNIQUE (OrderID),
  CONSTRAINT idChild FOREIGN KEY (idChild) REFERENCES child(idChild),
  CONSTRAINT idParent FOREIGN KEY (idParent) REFERENCES parent(idParent)
);

-- @block
INSERT INTO orders(ShoeID, idChild, idParent, OrderDate)
  VALUES (1, 2, 1, '2024-06-22 00:00:00'),
         (2, 1, 3, '2024-05-13 00:00:00'),
         (3, 3, 1, '2024-04-11 00:00:00');

-- @block
CREATE TABLE sold_shoe (
  SoldShoeID SERIAL PRIMARY KEY,
  OrderID int DEFAULT NULL,
  ShoeID int DEFAULT NULL,
  CONSTRAINT SoldShoeID_UNIQUE UNIQUE (SoldShoeID),
  CONSTRAINT OrderID FOREIGN KEY (OrderID) REFERENCES orders(OrderID),
  CONSTRAINT ShoeID FOREIGN KEY (ShoeID) REFERENCES available_shoe(ShoeID)
)

-- @block
INSERT INTO sold_shoe(OrderID, ShoeID)
  VALUES (2, 2),
         (1, 1);