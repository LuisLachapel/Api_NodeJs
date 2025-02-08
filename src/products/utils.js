const excelGenerator = (products,name, res) => {
    const xl = require('excel4node');

    products = products.map((product) =>{
        let id = product._id.toString();
        delete product._id;
        return{
            id,
            ...product

        }
    })

    let wb = new xl.Workbook();
    let ws = wb.addWorksheet('inventario');

    for(let row = 1; row <= products.length; row++){
        for(let column = 1; column <= Object.values(products[0]).length; column++){
            let data = Object.values(products[row - 1])[column - 1];
            if(typeof data === 'string' ){
                ws.cell(row,column).string(data)
            }else{
                ws.cell(row, column).number(data);
            }
        }

    }

    wb.write(`${name}.xlsx`,res);

}


module.exports.Products_Utils = {
    excelGenerator
}