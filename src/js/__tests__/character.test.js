import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';

// Группа тестов на создание персонажей
describe('Character creation', () => {
    test('should throw error if name is too short', () => {
        expect(() => new Character('A', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
    });

    test('should throw error if name is too long', () => {
        expect(() => new Character('VeryLongName123', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
    });

    test('should throw error if name is not a string', () => {
        expect(() => new Character(12345, 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
    });

    test('should throw error if type is invalid', () => {
        expect(() => new Character('Hero', 'Warrior')).toThrow('Некорректный тип персонажа');
    });

    test('should create Bowman correctly', () => {
        const hero = new Bowman('Robin');
        const expected = {
            name: 'Robin',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        };
        expect(hero).toEqual(expected);
    });

    test('should create Swordsman correctly', () => {
        const hero = new Swordsman('Arthur');
        expect(hero.attack).toBe(40);
        expect(hero.defence).toBe(10);
    });

    test('should create Magician correctly', () => {
        const hero = new Magician('Gandalf');
        expect(hero.attack).toBe(10);
        expect(hero.defence).toBe(40);
    });

    test('should create Undead correctly', () => {
        const hero = new Undead('Skel');
        expect(hero.attack).toBe(25);
        expect(hero.defence).toBe(25);
    });

    test('should create Zombie correctly', () => {
        const hero = new Zombie('Shaun');
        expect(hero.attack).toBe(40);
        expect(hero.defence).toBe(10);
    });

    test('should create Daemon correctly', () => {
        const hero = new Daemon('Lucifer');
        expect(hero.attack).toBe(10);
        expect(hero.defence).toBe(40);
    });
});