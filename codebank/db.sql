CREATE TABLE credit_cards (
    id uuid NOT NULL,
    name VARCHAR NOT NULL,
    number VARCHAR NOT NULL,
    expiration_month VARCHAR NOT NULL,
    expiration_year VARCHAR,
	CVV VARCHAR NOT NULL,
	balance float not null,
	balance_limit float not null,
    PRIMARY KEY (id)
);

CREATE TABLE transactions (
    id uuid NOT NULL,
	credit_card_id uuid NOT NULL references credit_cards(id),
    amount float NOT NULL,
    status VARCHAR NOT NULL,
    description VARCHAR,
	store VARCHAR NOT NULL,
	created_at timestamp not null,
    PRIMARY KEY (id)
);

insert into 
credit_cards(id, name, number, expiration_month, expiration_year, cvv, balance, balance_limit)
values('34eca8f4-105f-4577-a652-2345ac5d0788', 'Felippe', '1111111111111103', '9', '2029', '123', 0.0, 900000.0)