import { ToggleClassDirective } from './toggle-class.directive';

describe('ToggleClassDirective', () => {
  it('should create an instance', () => {
    const mockRef = {
      nativeElement: {
        className: ''
      }
    };
    const directive = new ToggleClassDirective(mockRef);
    expect(directive).toBeTruthy();
  });
});
