export const codigoEjemplo = `class LuisMartinez {
    name: string
    dayOfBirthTimestamp: number
    email: string
    idiomas: string[]
    metaDeVida: string
    telefono: string

    //Soy Competitivo, alegre y me encanta aprender siempre nuevas tecnologias :)
    constructor() {
        this.name = 'Luis Javier Martinez Fernandez'
        this.email = 'luisjavier004@hotmail.com'
        this.telefono = '9993777732'
        this.fechaNacimientoTimestamp = 823412700
        this.idiomas = ["ingles", "español"]
        this.metaDeVida = this.metaVida()
    }

    metaVida(): string {
    return 'Establecerme como jefe en una empresa de clase mundial líder ' +
        'en diseño y nuevas tecnologías de software mediante mis habilidades crecientes ' +
        'de trabajo para poder ayudar a las personas a facilitar y alegrar su vida mediante ' +
        'las nuevas tecnologías y herramientas que ofrece el software.'
    }



    experienciaLaboral(): Array<> {
        return [
            { '2020-now': 'Freelancer, Buscando Trabajo' },
            { '2018-2020': 'Gant Soluciones Empresariales.' },
            { '2016-2017': 'Trabaje Como Freelancer Web' },
            { '2016-now': 'Estudiante Ingenieria de Software, Enfocado en WEB' }
        ]
    }


    habilidades(): string[] {
        return ['Ingenieria de Software', 'HTML5.1/CSS4/JS', 'jQuery', 'PHP',
            'Android', 'Bootstrap/Foundation/Material Design', 'Webpack/Gulp',
            'SASS/Less', 'Java',
            'npm/yarn/bower', 'Docker', 'PWA', 'SPA', 'Cineama 4D',
            'GIT/Github/Gitlab', 'MySql', 'NativeScript', 'Angular', 'Ionic', 'Electron',
            'Web-extensions', 'Web Sockets', 'Firebase', 'Laravel/Codeigniter', 'Node.js',
            'SQL Server', 'PL/SQL', 'Wordpress', 'Figma', 'AdobeXD', 'Photoshop/Gimp',
            'Illustrator', 'After Effects', 'Motion design', 'UX/UI', 'GSAP', 'FL Studio',
            'Computación', 'REACT']
    }
}
`;
