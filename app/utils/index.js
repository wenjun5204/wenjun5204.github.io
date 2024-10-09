export const postGptRequest = async ({ model = 'gpt-4o', content = '' }) => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer 1833710962206507057`);
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
        model: model || 'gpt-4o',
        messages: [{ role: 'user', content: content || '' }],
        stream: false,
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    };

    try {
        return '我是测试';
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
