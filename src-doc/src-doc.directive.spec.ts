import { SrcDocDirective } from './src-doc.directive';

describe('SrcDocDirective', () => {
  it('should create an instance', () => {
    const elem = document.createElement('iframe');
    const mockRef = {
      nativeElement: elem
    };
    const directive = new SrcDocDirective(mockRef);
    expect(directive).toBeTruthy();
  });
});
