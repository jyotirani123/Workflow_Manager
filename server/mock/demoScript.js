function print(i) {
    setTimeout(function() {
        console.log(i+1);
        print(i+1);
    }, 1000);
}
print(0);