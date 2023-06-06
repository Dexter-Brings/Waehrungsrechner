function calc(){
    let euro = euroField.value;
    let result = euro * 0.891;
    usdField.value = result.toFixed(2).replace('.', ',');
}