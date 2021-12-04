import MagicCharacter from '../MagicCharacter';

test('Character', () => {
    const expected = {
      health: 100,
      level: 1,
      name: 'ajoq',
    };
    const received = new MagicCharacter('ajoq');
    expect(received).toEqual(expected);
  });
  
  test('throw in Character', () => {
    function throwCharacher() {
      return new MagicCharacter('q');
    }
  
    expect(throwCharacher).toThrowError(new Error('Длина имени должна быть от 2 до 10 символов'));
  });