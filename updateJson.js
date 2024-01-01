const fs = require('fs');

fs.readFile('database.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const database = JSON.parse(data);

  const updatedDatabase = {
    ...database,
    products: database.products.map((product, index) => {
      return { ...product, key: index + 1 };
    }),
  };

  fs.writeFile('updated_database.json', JSON.stringify(updatedDatabase, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File has been updated successfully.');
    }
  });
});
