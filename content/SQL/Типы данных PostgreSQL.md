---
title: Типы данных PostgreSQL
date: 2023-11-08
---
## Типы данных
> В стандартном SQL прописаны такие типы как `bigint`, `bit`, `bit varying`, `boolean`, `char`, `character varying`, `character`, `varchar`, `date`, `double precision`, `integer`, `interval`, `numeric`, `decimal`, `real`, `smallint`, `time` (с часовым поясом и без), `timestamp` (с часовым поясом и без), `xml`

В PostgreSQL доступны такие типы данных
<table border="1" >
        <thead>
            <tr>
                <th>Имя</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><tt class="TYPE">bigint</tt></td>
                <td>знаковое целое из 8 байт</td>
            </tr>
            <tr>
                <td><tt class="TYPE">bigserial</tt></td>
                <td>восьмибайтное целое с автоувеличением</td>
            </tr>
            <tr>
                <td><tt class="TYPE">bit [ (<tt class="REPLACEABLE"><i>n</i></tt>) ]</tt></td>
                <td>битовая строка фиксированной длины</td>
            </tr>
            <tr>
                <td><tt class="TYPE">bit varying [ (<tt class="REPLACEABLE"><i>n</i></tt>) ]</tt></td>
                <td>битовая строка переменной длины</td>
            </tr>
            <tr>
                <td><tt class="TYPE">boolean</tt></td>
                <td>логическое значение (true/false)</td>
            </tr>
            <tr>
                <td><tt class="TYPE">box</tt></td>
                <td>прямоугольник в плоскости</td>
            </tr>
            <tr>
                <td><tt class="TYPE">bytea</tt></td>
                <td>двоичные данные (<span class="QUOTE">"массив байт"</span>)</td>
            </tr>
            <tr>
                <td><tt class="TYPE">character [ (<tt class="REPLACEABLE"><i>n</i></tt>) ]</tt></td>
                <td>символьная строка фиксированной длины</td>
            </tr>
            <tr>
                <td><tt class="TYPE">character varying [ (<tt class="REPLACEABLE"><i>n</i></tt>) ]</tt></td>
                <td>символьная строка переменной длины</td>
            </tr>
            <tr>
                <td><tt class="TYPE">cidr</tt></td>
                <td>сетевой адрес IPv4 или IPv6</td>
            </tr>
            <tr>
                <td><tt class="TYPE">circle</tt></td>
                <td>круг в плоскости</td>
            </tr>
            <tr>
                <td><tt class="TYPE">date</tt></td>
                <td>календарная дата (год, месяц, день)</td>
            </tr>
            <tr>
                <td><tt class="TYPE">double precision</tt></td>
                <td>число двойной точности с плавающей точкой (8 байт)</td>
            </tr>
            <tr>
                <td><tt class="TYPE">inet</tt></td>
                <td>адрес узла IPv4 или IPv6</td>
            </tr>
            <tr>
                <td><tt class="TYPE">integer</tt></td>
                <td>знаковое четырёхбайтное целое</td>
            </tr>
            <tr>
                <td><tt class="TYPE">interval [ <tt class="REPLACEABLE"><i>поля</i></tt> ] [ (<tt class="REPLACEABLE"><i>p</i></tt>) ]</tt></td>
                <td>интервал времени</td>
            </tr>
            <tr>
                <td><tt class="TYPE">json</tt></td>
                <td>текстовые данные JSON</td>
            </tr>
            <tr>
                <td><tt class="TYPE">jsonb</tt></td>
                <td>двоичные данные JSON, разобранные</td>
            </tr>
            <tr>
                <td><tt class="TYPE">line</tt></td>
                <td>прямая в плоскости</td>
            </tr>
            <tr>
                <td><tt class="TYPE">lseg</tt></td>
                <td>отрезок в плоскости</td>
            </tr>
            <tr>
                <td><tt class="TYPE">macaddr</tt></td>
                <td>MAC-адрес</td>
            </tr>
            <tr>
                <td><tt class="TYPE">money</tt></td>
                <td>денежная сумма</td>
            </tr>
            <tr>
                <td><tt class="TYPE">numeric [ (<tt class="REPLACEABLE"><i>p</i></tt>, <tt class="REPLACEABLE"><i>s</i></tt>) ]</tt></td>
                <td>вещественное число заданной точности</td>
            </tr>
            <tr>
                <td><tt class="TYPE">path</tt></td>
                <td>геометрический путь в плоскости</td>
            </tr>
            <tr>
                <td><tt class="TYPE">pg_lsn</tt></td>
                <td>Последовательный номер в журнале <span class="PRODUCTNAME">PostgreSQL</span></td>
            </tr>
            <tr>
                <td><tt class="TYPE">point</tt></td>
                <td>геометрическая точка в плоскости</td>
            </tr>
            <tr>
                <td><tt class="TYPE">polygon</tt></td>
                <td>замкнутый геометрический путь в плоскости</td>
            </tr>
            <tr>
                <td><tt class="TYPE">real</tt></td>
                <td>число одинарной точности с плавающей точкой (4 байта)</td>
            </tr>
            <tr>
                <td><tt class="TYPE">smallint</tt></td>
                <td>знаковое двухбайтное целое</td>
            </tr>
            <tr>
                <td><tt class="TYPE">smallserial</tt></td>
                <td>двухбайтное целое с автоувеличением</td>
            </tr>
            <tr>
                <td><tt class="TYPE">serial</tt></td>
                <td>четырёхбайтное целое с автоувеличением</td>
            </tr>
            <tr>
                <td><tt class="TYPE">text</tt></td>
                <td>символьная строка переменной длины</td>
            </tr>
            <tr>
                <td><tt class="TYPE">time [ (<tt class="REPLACEABLE"><i>p</i></tt>) ] [ without time zone ]</tt></td>
                <td>время суток (без часового пояса)</td>
            </tr>
            <tr>
                <td><tt class="TYPE">time [ (<tt class="REPLACEABLE"><i>p</i></tt>) ] with time zone</tt></td>
                <td>время суток с учётом часового пояса</td>
            </tr>
            <tr>
                <td><tt class="TYPE">timestamp [ (<tt class="REPLACEABLE"><i>p</i></tt>) ] [ without time zone ]</tt></td>
                <td>дата и время (без часового пояса)</td>
            </tr>
            <tr>
                <td><tt class="TYPE">timestamp [ (<tt class="REPLACEABLE"><i>p</i></tt>) ] with time zone</tt></td>
                <td>дата и время с учётом часового пояса</td>
            </tr>
            <tr>
                <td><tt class="TYPE">tsquery</tt></td>
                <td>запрос текстового поиска</td>
            </tr>
            <tr>
                <td><tt class="TYPE">tsvector</tt></td>
                <td>документ для текстового поиска</td>
            </tr>
            <tr>
                <td><tt class="TYPE">txid_snapshot</tt></td>
                <td>снимок идентификатора транзакций</td>
            </tr>
            <tr>
                <td><tt class="TYPE">uuid</tt></td>
                <td>универсальный уникальный идентификатор</td>
            </tr>
            <tr>
                <td><tt class="TYPE">xml</tt></td>
                <td>XML-данные</td>
            </tr>
        </tbody>
    </table>

## Первичный ключ
Для обозначения первичного ключа нужно использовать `id SERIAL PRIMARY KEY`, это создаст первичный ключ с автоинкрементом
