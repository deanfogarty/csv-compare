Svelte web application to compare two .csv files using a key field and mark
rows whose corresponding columns have different values.

## Install

```javascript
% npm install
```

## Run

```javascript
% npm run dev
```

## Usage

### Loading data

1. Generate a couple of .csvs.
2. Drop one in the **File A** box.
3. Choose the columns that you are interested in the most, including the column you will use as the key to match against in the other file.
4. Click **Hide columns**. Click **Show table** to have a look at your data if you wish.
5. Drop the other file in the **File B** box, choose columns, check data if you wish.

### Choosing the shared key and fields to match

1. Make sure tables and column choosers are hidden.
2. In **Select key to match between files**, choose the column name from each file that should match across both files.
3. Optional: In **Match column data**, line up the remaining column names that should match values across both files, then check the **Include?** box.

### Results table

The results table shows File A columns on the left, File B columns on the right. Separating these
two will be the **Shared Key**, the column you chose in **Select key to match between files**.

If you chose columns in **Match column data**: mismatches between chosen columns will highlight the entire row in red.

### Exporting the result

The table showing the results can be used as-is, or copied out for pasting into a spreadsheet. To copy:

1. Click **Copy table to clipboard**
2. Go to your spreadsheet / editor / wherever and **paste**.

### Errors

#### **non-unique key in &lt;filename&gt; : &lt;column name&gt;: &lt;value&gt;**

This means that in **&lt;filename&gt;**, the key that you chose (**&lt;column
name&gt;**) is not unique (value **&lt;value&gt;**) and repeats within the
file. This affects all rows with this key, so you should check the input file,
clean it up, then reimport it.

#### **rows that are highlighted in red**

When using **Match column data**, rows are highlighted where the columns you chose that should match between files do not match.
