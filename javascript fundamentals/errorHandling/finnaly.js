// apapun hasil dari try & catch statement, finnaly statement akan selalu dieksekusi

try {
    let age = 25; //change to 1 or 6 or 40 or string or {}
    if (age === undefined) throw "age undefined!"
    if (age < 2) throw "reject boolean!"
    if (age < 10) throw "too young!"
    if (age > 35) throw "too old!"
    if (typeof age === 'string') throw "not a number!"
    if (typeof age === 'null') throw "not a number!"
    if (typeof age === 'object') throw "not a number!"
} catch (ex) {
    console.log('Error : ' + ex);
} finally {
    console.log("always executed!"); //kode ini akan selalu dieksekusi walai terjadi error pada try dan catch
}