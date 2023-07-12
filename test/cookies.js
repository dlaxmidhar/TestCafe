fixture`[API] Set Cookies`
    .page('https://devexpress.github.io/testcafe/example/');

test('Should set cookies by name and value', async t => {
    await t.setCookies({ apiCookie1: 'value1' }, 'http://localhost');

    const cookies = await t.getCookies();
    console.log(cookies);

    const { name, value, domain, path } = cookies[0];

    await t
        .expect(name).eql('apiCookie1')
        .expect(value).eql('value1')
        .expect(domain).eql('localhost')
        .expect(path).eql('/');
});