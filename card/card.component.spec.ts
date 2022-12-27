import { CardComponent, CardType } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;

  beforeEach(() => {
    component = new CardComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the class for default card type', () => {
    component.type = CardType.DEFAULT;
    expect(component.classes).toBe('bt-card default');
  });

  it('should return the class for primary card type', () => {
    component.type = CardType.PRIMARY;
    expect(component.classes).toBe('bt-card default primary');
  });

  it('should return the class for success card type', () => {
    component.type = CardType.SUCCESS;
    expect(component.classes).toBe('bt-card default success');
  });

  it('should return the class for info card type', () => {
    component.type = CardType.INFO;
    expect(component.classes).toBe('bt-card info');
  });

  it('should return the class for warning card type', () => {
    component.type = CardType.WARNING;
    expect(component.classes).toBe('bt-card default warning');
  });

  it('should return empty class for unknown card type', () => {
    component.type = 1000;
    expect(component.classes).toBe('');
  });
});
