var canales_recomendados = [
    {
        id:0,
        nombre:'Index',
        img:'index',
        descripcion:'',
        link:'#'
    },
    {
        id:1,
        nombre:'Affinity',
        img:'affinity',
        descripcion:'Generamos alianzas con empresas de servicios públicos, cajas de compensación, entre otras, para estar más cerca de ti y ofrecerte soluciones de seguros ajustadas a tus necesidades.',
        link:'#'
    },
    {
        id:2,
        nombre:'Asesores',
        img:'asesores',
        descripcion:'Nuestros asesores de seguros te ofrecen soluciones integrales y a tu medida, a través de un acompañamiento personalizado, buscando siempre tu tranquilidad y bienestar.',
        link:'#'
    },
    {
        id:3,
        nombre:'Bancaseguros',
        img:'bancaseguros',
        descripcion:'A través de alianzas con distintas entidades financieras del país, buscamos estar más cerca de ti y brindarte la protección que necesites.',
        link:'#'
    },
    {
        id:4,
        nombre:'Corredores',
        img:'corredores',
        descripcion:'Una solución para grandes empresas que buscan asegurar su patrimonio y el bienestar de sus empleados. Para este canal, contamos con compañías especializadas en atender la protección integral de tu empresa y sus empleados. Identiﬁca a todos nuestros corredores autorizados.',
        link:'#'
    },
    {
        id:5,
        nombre:'Corresponsales',
        img:'corresponsales',
        descripcion:'Llegamos al lugar donde te encuentres con nuestros corresponsales de seguros, quienes están a tu disposición para compartir contigo nuestro portafolio de servicios. Aquí encontrarás diferentes puntos de comercio (tiendas en tu barrio, personas naturales, etc.) que comparten con nosotros el propósito de protegerte.',
        link:'#'
    },
    {
        id:6,
        nombre:'Digital',
        img:'digital',
        descripcion:'Contamos con suraenlinea.com y wesura.com, nuestros canales de venta digitales para que accedas a nuestro portafolio de seguros de forma directa, ágil y en línea.',
        link:'#'
    },
    {
        id:7,
        nombre:'Retail',
        img:'retail',
        descripcion:'Desarrollamos alianzas con almacenes de grandes superﬁcies y diferentes industrias que nos permiten estar en tu cotidianidad, para que puedas conocer los servicios que tenemos para ti en cualquier lugar.',
        link:'#'
    },
    {
        id:8,
        nombre:'Protección',
        img:'proteccion',
        descripcion:'Queremos ser ese paso extra al momento de protegerte a ti y a tu familia. Nuestro objetivo es ayudarte a gestionar los riesgos y las incertidumbres asociadas con tu labor o con tu futuro.',
        link:'#'
    }
]

function getCanalRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function checkCanalRecomendado(n,not_allowed){
    var repe = 0;
    var i = 0;
    for(i = 0;i<canales_recomendados_aleatorios.length;i++){
        if(canales_recomendados_aleatorios[i]==n){
            repe++
        }
    }
    if(n==not_allowed){
        repe++
    }

    if(repe==0){
        return false
    }else{
        return true
    }
}

var canales_recomendados_aleatorios = []
function getRandomCanales(not_allowed){
    while(canales_recomendados_aleatorios.length<3){
        var num = getCanalRandom(1,(canales_recomendados.length-1))
        var check_num = checkCanalRecomendado(num,not_allowed)
        while(check_num){
            num = getCanalRandom(1,(canales_recomendados.length-1))
            check_num = checkCanalRecomendado(num)
        }
        canales_recomendados_aleatorios.push(num)
    }
}

function setRandomCanales(not_allowed){
    getRandomCanales(not_allowed)
    var cr1 = canales_recomendados_aleatorios[0]
    var cr2 = canales_recomendados_aleatorios[1]
    var cr3 = canales_recomendados_aleatorios[2]

    var html=''
    html+='<h1>Te puede interesar</h1>'
    html+='<br />'
    html+='<div class="cv-nuestros-canales-col2">'
        html+='<div class="cv-nuestros-canales-card2">'
            html+='<div class="cv-nuestros-canales-card-head">'
                html+='<img src="images/cards/'+canales_recomendados[cr1].img+'.jpg" />'
                html+='<h3 class="cv-card-'+canales_recomendados[cr1].img+'-title"><span>'+canales_recomendados[cr1].nombre+'</span></h3>'
            html+='</div>'
            html+='<div class="cv-nuestros-canales-card-body">'
                html+='<p>'+canales_recomendados[cr1].descripcion+'</p>'
                html+='<a href="'+canales_recomendados[cr1].link+'">Ver más</a>'
            html+='</div>'
        html+='</div>'

        html+='<div class="cv-nuestros-canales-card2">'
            html+='<div class="cv-nuestros-canales-card-head">'
                html+='<img src="images/cards/'+canales_recomendados[cr2].img+'.jpg" />'
                html+='<h3 class="cv-card-'+canales_recomendados[cr2].img+'-title"><span>'+canales_recomendados[cr2].nombre+'</span></h3>'
            html+='</div>'
            html+='<div class="cv-nuestros-canales-card-body">'
                html+='<p>'+canales_recomendados[cr2].descripcion+'</p>'
                html+='<a href="'+canales_recomendados[cr2].link+'">Ver más</a>'
            html+='</div>'
        html+='</div>'

        html+='<div class="cv-nuestros-canales-card2">'
            html+='<div class="cv-nuestros-canales-card-head">'
                html+='<img src="images/cards/'+canales_recomendados[cr3].img+'.jpg" />'
                html+='<h3 class="cv-card-'+canales_recomendados[cr3].img+'-title"><span>'+canales_recomendados[cr3].nombre+'</span></h3>'
            html+='</div>'
            html+='<div class="cv-nuestros-canales-card-body">'
                html+='<p>'+canales_recomendados[cr3].descripcion+'</p>'
                html+='<a href="'+canales_recomendados[cr3].link+'">Ver más</a>'
            html+='</div>'
        html+='</div>'
    html+='</div>'

    document.getElementById('cv-canales-recomendados').innerHTML = html
}
