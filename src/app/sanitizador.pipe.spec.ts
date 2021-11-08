import { SanitizadorPipe } from './sanitizador.pipe';

describe('SanitizadorPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizadorPipe();
    expect(pipe).toBeTruthy();
  });
});
