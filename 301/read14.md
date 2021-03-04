# Code 301

## Reading 14: DB Normalization

## [Database Normalization - Explained in Plain English](https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)

- "Database normalization is a process used to organize a database into tables and columns.  The main idea with this is that a table should be about a specific topic and only supporting topics included."

- "By limiting a table to one purpose you reduce the number of duplicate data contained within your database. This eliminates some issues stemming from database modifications."

- "There are three main reasons to normalize a database.  The first is to minimize duplicate data, the second is to minimize or avoid data modification issues, and the third is to simplify queries."

- Duplicate Data causes:
    1. "It increases storage and decrease performance.
    2. It becomes more difficult to maintain data changes."

- Insert Anomaly: Unable to add data without the  primary key data first. 

- Update Anomoly: "If we don’t update all rows, then inconsistencies appear."

- Deletion Anomaly: "Deletion of a row causes removal of more than one set of facts."

"The forms are progressive, meaning that to qualify for 3rd normal form a table must first satisfy the rules for 2nd normal form, and 2nd normal form must adhere to those for 1st normal form. Before we discuss the various forms and rules in detail, let’s summarize the various forms:

- First Normal Form – The information is stored in a relational table with each column containing atomic values. There are no repeating groups of columns.
- Second Normal Form – The table is in first normal form and all the columns depend on the table’s primary key.
- Third Normal Form – the table is in second normal form and all of its columns are not transitively dependent on the primary key."