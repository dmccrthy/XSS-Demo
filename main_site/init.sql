-- Create site tables
CREATE TABLE Products (
    product_id INTEGER,
    name VARCHAR(100),
    description VARCHAR(255),
    price DECIMAL(19, 2)
);

CREATE TABLE Reviews (
    review_id INTEGER,
    title VARCHAR(100),
    body VARCHAR(255),
    rating INTEGER,
    post_date TIMESTAMP,
    user_id INTEGER,
    product_id INTEGER
);

CREATE TABLE Users (
    user_id INTEGER,
    username VARCHAR(32),
    email VARCHAR(255),
    password_hash VARCHAR(100)
);

-- Load dummy data
INSERT INTO Products VALUES
  (1, 'AeroCrisp Digital Air Fryer', 'his digital air fryer features a sleek touchscreen, 8 preset cooking modes, and a spacious non-stick basket perfect for family-sized portions.', 99.99),
  (2, 'WoolBlend Beanie', 'Stay warm in style with this stretch-fit beanie made from recycled wool and acrylic.', 19.99),
  (3, 'Claystone Ceramic Planter Set (3-pack)', 'Minimalist plant pots with drainage holes, perfect for succulents and herbs.', 39.95);
