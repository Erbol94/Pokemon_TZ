import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Row from '../assets/img/Row.svg'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import classes from './InfoPokemon.module.css'


function InfoPokemonPage() {
    const [data, setData] = useState({ sprites: { other: { dream_world: { front_default: '' } } } })
    const { id } = useParams()

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id])

    return (
        <div>
            <Header />
            <div className={classes.container}>
                <div className={classes.container_info}>
                <Link to={'/'} style={{textDecoration: 'none', color: '#3F3F3F', display:'flex'}}><img style={{marginRight: '12px'}} src={Row} alt=''></img><p >Вернуться в каталог</p></Link>
                    <div className={classes.info_inner}>
                    <p><span className={classes.span} >{data.name}</span> (яп. フシギダネ Фусигиданэ, англ. Bulbasaur) — покемон двойного травяного ядовитого типа, представленный в первом поколении.
                        Эволюционирует в Ивизавра на 16 уровне, который затем эволюционирует в Венузавра на 32 уровне.
                        Наряду с Чармандером и Сквиртлом, это один из стартовых покемонов региона Канто.
                    </p>
                    <div className={classes.list_info}>
                        <ul>
                            <h3>Содержание</h3>
                            <li>Внешность</li>
                            <li>Характер</li>
                            <li>Способности</li>
                            <li>Обитание</li>
                            <li>В аниме</li>
                            <li>Эволюция</li>
                        </ul>
                    </div>
                    <h3>Внешность</h3>
                    <p>Бульбазавр — маленький четвероногий покемон голубовато-зелёного цвета с темно-зелёными пятнами на теле. У него красные глаза, широкий рот и слегка заострённые уши. Когда его рот открыт, на его верхней челюсти видна пара заострённых зубов. У него толстые лапы, заканчивающиеся тремя острыми когтями. На спине у Бульбазавра находится зелёная луковица, которая, согласно записи в Покедексе, была посажена там при рождении. Когда Бульбазавр готов эволюционировать, луковица на его спине начинает мерцать голубоватым цветом и впоследствии преобразуется в бутон. Если он не хочет развиваться, он изо всех сил сопротивляется трансформации.</p>
                    <h3>Характер</h3>
                    <p>У Бульбазавра покладистый характер, благодаря чему он является хорошим выбором для начинающих тренеров. Это самый спокойный и миролюбивый из стартовых покемонов Канто. Бульбазавр хорошо ладит с другими покемонами и в случае необходимости может взять на себя роль лидера. Бульбазавр в аниме продемонстрировал заботливый инстинкт по отношению к маленьким, более слабым покемонам, один даже использовал свои виноградные лозы, чтобы поднять плачущего покемона, мягко раскачивая его взад и вперед по воздуху, напевая колыбельную.
                        Бульбазавр может быть очень преданным, как показано в серии «Таинственное чудовище», где Бульбазавр много лет ждал тренера, бросившего его. У диких Бульбазавров сложное сообщество со своими традициями и ритуалами, и они стоят горой за любого Бульбазавра, даже чужака. Это показано в серии «Таинственный сад Бульбазавров».
                    </p>
                    <h3>Способности</h3>
                    <p>Исследователи не уверены, следует ли классифицировать Бульбазавра и его развитые формы как растения или животные, поскольку они содержат в себе признаки и тех, и других. На спине Бульбазавра растёт крупная зелёная луковица: когда Бульбазавр появляется на свет, у него на спине есть зерно, которое позже в неё вырастает. Она обеспечивает его энергией в процессе фотосинтеза, а также содержит питательные вещества. Луковица также скрывает две тонкие, похожие на щупальца виноградные лозы. Она впитывает солнечные лучи и постепенно увеличивается в размерах. Поэтому, часто можно увидеть Бульбазавра дремлющим при ярком солнечном свете.
                        Бульбазавр, как и все стартовые покемоны Травяного типа обладают способностью Зарастание, что позволяет ему использовать атаки Травяного типа с дополнительным уроном в 50%, если его здоровье ниже 33%. Скрытая способность Бульбазавра Хлорофилл удваивает его скорость в бою при ярком солнечном свете.
                    </p>
                    </div>
                    
                </div>
                <div className={classes.container_image}>
                    <div className={classes.card_image}>
                        {<img src={data.sprites.other.dream_world.front_default} alt='' />}
                    </div>
                    <span className={classes.span}>{data.name}</span>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default InfoPokemonPage;