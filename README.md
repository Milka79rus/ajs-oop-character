# Сharacter Classes & Inheritance (OOP)

[![Check Code](https://github.com/Milka79rus/ajs-oop-character/actions/workflows/run.yml/badge.svg)](https://github.com/Milka79rus/ajs-oop-character/actions/workflows/run.yml)

## Описание проекта
В данном проекте реализована иерархия игровых персонажей с использованием современных стандартов JavaScript (ES6 Classes). Проект построен на базе **Webpack** и включает в себя:
* Базовый класс `Character` с валидацией имени и типа.
* 6 специализированных классов-наследников: `Bowman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie`.
* Полную настройку инфраструктуры: Babel, ESLint, Jest.

## Технологии
* **JavaScript (ES6+)** — классы, наследование (`extends`, `super`).
* **Webpack** — сборка проекта.
* **Jest** — модульное тестирование (Unit Testing).
* **ESLint** — проверка стиля кода (конфиг airbnb-base).
* **GitHub Actions** — автоматический запуск тестов при каждом пуше (CI).

## Требования к персонажам
Каждый персонаж имеет следующие характеристики:
* `name` — строка (от 2 до 10 символов).
* `type` — строго один из списка (Bowman, Swordsman и др.).
* `health` — по умолчанию 100.
* `level` — по умолчанию 1.
* Уникальные показатели `attack` и `defence` для каждого класса.
* 
