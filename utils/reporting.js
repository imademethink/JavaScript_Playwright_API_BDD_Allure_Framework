export async function attachResponse(testInfo, response) {
    const body = await response.json();

    await testInfo.attach('API Response', {
        body: Buffer.from(JSON.stringify(body, null, 2)),
        contentType: 'application/json'
    });
}
