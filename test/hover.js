fixture`Interact With the Page`
    .page`https://js.devexpress.com`;

test('Hover test', async t => {
    await t
        .setTestSpeed(0.1)
        .hover('.map-container');
});