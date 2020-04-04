    function somefunction() {
        var promise = new Promise((resolve, reject) => {
            let error = true
            setTimeout(() => {
                console.log("srecko");
                if (error) {
                    reject("Error")
                } else {
                    resolve("This is OK");
                }
            }, 2000)
        });
        return promise;
    }


    somefunction().then(
        (success) => {
            console.log(success)
        }
    ).catch((error) => {
        console.log(error)
    });




