import { Selector } from "testcafe";
fixture`Fixture.beforeEach`
    .page`https://devexpress.github.io/testcafe/example/`
    .beforeEach(async t => {
        await t.click('#submit-button');
    });