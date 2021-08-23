[Node.js] Homework #1

```shell
# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
```

| #   | action | screenshot      |
| --- | ------ | --------------- |
| 1   | add    | [-->click<--]() |

```shell
# Получаем контакт по id
node index.js --action get --id 5
```

| #   | action | screenshot      |
| --- | ------ | --------------- |
| 2   | get    | [-->click<--]() |

```shell
# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
```

| #   | action | screenshot      |
| --- | ------ | --------------- |
| 3   | list   | [-->click<--]() |

```shell
# Удаляем контакт
node index.js --action remove --id=3
```

| #   | action | screenshot |
| --- | ------ | ---------- |
| 4   | remove | [click]()  |
