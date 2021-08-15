function showProductId() {
    let productId = 12345;

    function fix(){
        let productId = 45678;
        console.log(`in fix: ${productId}`)
    }

    fix()

    console.log(`in showProductId: ${productId}`)
}

showProductId();
