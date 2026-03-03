const fetchData = async () => {

    console.log("Connecting to Server...");

    const response = new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true;

            success ? resolve({ data: "Success", status: 200 }) : reject("Error");

        }, 2000);

    });

    try {

        const result = await response;

        console.log(`Server Response: ${result.data} (Code: ${result.status})`);

    } catch (error) {

        console.error(error);

    }

};

fetchData();