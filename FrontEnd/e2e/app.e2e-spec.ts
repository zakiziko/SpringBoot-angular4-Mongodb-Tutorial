import { EventManagePage } from './app.po';

describe('event-manage App', () => {
  let page: EventManagePage;

  beforeEach(() => {
    page = new EventManagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
