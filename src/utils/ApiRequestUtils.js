/**
 * common call to fetch API request method POST
 * @param {*} apiUrl 
 * @param {*} successCb 
 * @param {*} payLoadData 
 * @param {*} failureCb 
 */
const apiPost = async (apiUrl, successCb, payLoadData = {}, failureCb = null) => {
    console.log('#################### ApiRequestUtils :: apiPost ################', payLoadData);

    let sendParams = await createParams(payLoadData);
    console.log('#################### ApiRequestUtils :: apiPost ################', sendParams);

    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: sendParams
    }).then(async (res) => {
        if (res.status !== 200) {
            console.log('INVALID HTTP STATUS');
        }
        res.json().then((response) => {
            if (response.success) {
                successCb(response);
            } else if (!res.success) {
                successCb(response);
            } else if (failureCb !== null) {
                failureCb(response);
            }
        }).catch((error) => {
            console.log('#################### ApiRequestUtils :: apiPost::ERROR ################', error);
        });
    }).catch((error) => {
        console.log('#################### ApiRequestUtils :: apiPost::EXCEPTION ################', error);
    });
};


/**
 * common call to fetch API request method GET
 * @param {*} apiUrl 
 * @param {*} successCb 
 * @param {*} failureCb 
 */
const apiGet = async (apiUrl, successCb, failureCb = null) => {
    console.log('#################### ApiRequestUtils :: apiGet ################');

    await fetch(apiUrl, {
        method: 'GET'
    }).then(async (res) => {
        console.log(res);
        if (res.status !== 200) {
            console.log('INVALID HTTP STATUS');
        }
        res.json().then((response) => {
            if (response.success) {
                successCb(response);
            } else if (!res.success) {
                successCb(response);
            } else if (failureCb !== null) {
                failureCb(response);
            }
        }).catch((error) => {
            console.log('#################### ApiRequestUtils :: apiGet::ERROR ################', error);
        });
    }).catch((error) => {
        console.log('#################### ApiRequestUtils :: apiGet::EXCEPTION ################', error);
    });
};


/**
 * Convert JSON object to x-www-form-urlencoded params
 * @param {object} params
 */
const createParams = async (params = {}) => {
    return await JSON.stringify(params);
};

const apiCalls = {
    apiPost,
    apiGet
}

export default apiCalls;