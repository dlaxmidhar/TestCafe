import { Selector } from 'testcafe';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example`;

const nameInput = Selector('#developer-name');

test('My test', async t => {
    
    // Waits for '#developer-name' to appear in the DOM and become visible.
    const nameInputElement = await nameInput.with({ visibilityCheck: true })();
});