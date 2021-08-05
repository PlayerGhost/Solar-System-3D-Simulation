let sol, mercurio, venus, terra, marte, jupiter, saturno, urano, netuno
let lua, io, europa, ganimedes, calisto
let phobos, deimos
let mimas, enceladus, tethys, titan
let miranda, ariel, titania, oberon
let naiad, galatea, larissa, proteus
let tamanhoTerra
let distanciaTerraSol
let velocidadeRotacaoTerra
let velocidadeTranslacaoTerra

function setup() {
    createCanvas(1900, 940, WEBGL)
    createEasyCam()
    frameRate(30)

    tamanhoTerra = 1
    distanciaTerraSol = 300
    velocidadeRotacaoTerra = 1
    velocidadeTranslacaoTerra = 1

    sol = new Sphere(0, 0, 0, tamanhoTerra * 109, 10, 40)
    sol.setColor("#FDB813")

    mercurio = new Sphere(distanciaTerraSol * 0.387, 0, 0, tamanhoTerra * 0.383, 10, 50)
    mercurio.setColor("#e7e8ec")

    venus = new Sphere(distanciaTerraSol * 0.723, 0, 0, tamanhoTerra * 0.949, 10, 50)
    venus.setColor("#8B91A1")

    terra = new Sphere(distanciaTerraSol, 0, 0, tamanhoTerra, 50, 50)
    terra.setColor("#6b93d6")
    lua = new Sphere(distanciaTerraSol + distanciaTerraSol * 0.00257, 0, 0, tamanhoTerra * 0.2724, 10, 50)
    lua.setColor("#e5e5e5")

    marte = new Sphere(distanciaTerraSol * 1.52, 0, 0, tamanhoTerra * 0.532, 10, 50)
    marte.setColor("#a1251b")
    phobos = new Sphere(distanciaTerraSol * 1.5234, 2, 0, tamanhoTerra * 0.00177, 10, 50)
    phobos.setColor("#95877d")
    deimos = new Sphere(distanciaTerraSol * 1.5235, 0, 2, tamanhoTerra * 0.001, 10, 50)
    deimos.setColor("#c2b69e")

    jupiter = new Sphere(distanciaTerraSol * 5.20, 0, 0, tamanhoTerra * 11.21, 10, 50)
    jupiter.setColor("#c99039")
    io = new Sphere(distanciaTerraSol * 5.2073, 12, 0, tamanhoTerra * 0.286, 10, 50)
    io.setColor("#ece273")
    europa = new Sphere(distanciaTerraSol * 5.209, 0, 12, tamanhoTerra * 0.245, 10, 50)
    europa.setColor("#00183e")
    ganimedes = new Sphere(distanciaTerraSol * 5.211, -12, 0, tamanhoTerra * 0.413, 10, 50)
    ganimedes.setColor("#c88543")
    calisto = new Sphere(distanciaTerraSol * 5.217, 0, -12, tamanhoTerra * 0.378, 10, 50)
    calisto.setColor("#887768")

    saturno = new Sphere(distanciaTerraSol * 9.58, 0, 0, tamanhoTerra * 9.45, 10, 50)
    saturno.setColor("#343E47")
    mimas = new Sphere(distanciaTerraSol * 9.5834, 10, 0, tamanhoTerra * 0.0311, 10, 50)
    mimas.setColor("#bfbfbf")
    enceladus = new Sphere(distanciaTerraSol * 9.5838, 0, 10, tamanhoTerra * 0.04, 10, 50)
    enceladus.setColor("#d7d4d7")
    tethys = new Sphere(distanciaTerraSol * 9.58418, -10, 0, tamanhoTerra * 0.083, 10, 50)
    tethys.setColor("#bdbdbd")
    titan = new Sphere(distanciaTerraSol * 9.59, 0, -10, tamanhoTerra * 0.403, 10, 50)
    titan.setColor("#98804b")

    urano = new Sphere(distanciaTerraSol * 19.20, 0, 0, tamanhoTerra * 4.01, 10, 50)
    urano.setColor("#ace5ee")
    miranda = new Sphere(distanciaTerraSol * 19.20207, 5, 0, tamanhoTerra * 0.037, 10, 50)
    miranda.setColor("#d6d6d6")
    ariel = new Sphere(distanciaTerraSol * 19.20247, 0, 5, tamanhoTerra * 0.090, 10, 50)
    ariel.setColor("#bdbdbd")
    titania = new Sphere(distanciaTerraSol * 19.20411, -5, 0, tamanhoTerra * 0.124, 10, 50)
    titania.setColor("#cabeb1")
    oberon = new Sphere(distanciaTerraSol * 19.2051, 0, -5, tamanhoTerra * 0.119, 10, 50)
    oberon.setColor("#c9bcb1")

    netuno = new Sphere(distanciaTerraSol * 30.047, 0, 0, tamanhoTerra * 3.88, 10, 50)
    netuno.setColor("#212354")
    naiad = new Sphere(distanciaTerraSol * 30.04778, 5, 0, tamanhoTerra * 0.0051, 10, 50)
    naiad.setColor("#d8d8d8")
    galatea = new Sphere(distanciaTerraSol * 30.04787, 0, 5, tamanhoTerra * 0.0137, 10, 50)
    galatea.setColor("#d4d4d4")
    larissa = new Sphere(distanciaTerraSol * 30.04795, -5, 0, tamanhoTerra * 0.015, 10, 50)
    larissa.setColor("#cbcbcb")
    proteus = new Sphere(distanciaTerraSol * 30.04824, 0, -5, tamanhoTerra * 0.0329, 10, 50)
    proteus.setColor("#cccccc")
}

function draw() {
    background("#000000")
    fill(255, 0, 0)

    sol.draw()

    terra.rotationItSelf(velocidadeRotacaoTerra)
    terra.rotationZ(velocidadeTranslacaoTerra)
    terra.draw()
    lua.rotationItSelf(1 / (velocidadeRotacaoTerra * 27.4))
    lua.rotationAroundOther(terra, 1 / (velocidadeTranslacaoTerra * 0.0748))
    lua.draw()

    mercurio.rotationItSelf(1 / (velocidadeRotacaoTerra * 58.8))
    mercurio.rotationZ(1 / (velocidadeTranslacaoTerra * 0.241))
    mercurio.draw()

    venus.rotationItSelf(1 / (velocidadeRotacaoTerra * -244))
    venus.rotationZ(1 / (velocidadeTranslacaoTerra * 0.615))
    venus.draw()

    marte.rotationItSelf(1 / (velocidadeRotacaoTerra * 1.03))
    marte.rotationZ(1 / (velocidadeTranslacaoTerra * 1.88))
    marte.draw()
    phobos.rotationItSelf(1 / (velocidadeRotacaoTerra * 0.31891))
    phobos.rotationAroundOther(marte, 1 / (velocidadeTranslacaoTerra * 0.31891))
    phobos.draw()
    deimos.rotationItSelf(1 / (velocidadeRotacaoTerra * 1.26244))
    deimos.rotationAroundOther(marte, 1 / (velocidadeTranslacaoTerra * 1.26244))
    deimos.draw()

    jupiter.rotationItSelf(1 / (velocidadeRotacaoTerra * 0.415))
    jupiter.rotationZ(1 / (velocidadeTranslacaoTerra * 11.9))
    jupiter.draw()
    io.rotationItSelf(1 / (velocidadeRotacaoTerra * 42.5))
    io.rotationAroundOther(jupiter, 1 / (velocidadeTranslacaoTerra * 1.8))
    io.draw()
    europa.rotationItSelf(1 / (velocidadeRotacaoTerra * 85.2))
    europa.rotationAroundOther(jupiter, 1 / (velocidadeTranslacaoTerra * 3.6))
    europa.draw()
    ganimedes.rotationItSelf(1 / (velocidadeRotacaoTerra * 171.7))
    ganimedes.rotationAroundOther(jupiter, 1 / (velocidadeTranslacaoTerra * 7.2))
    ganimedes.draw()
    calisto.rotationItSelf(1 / (velocidadeRotacaoTerra * 400.5))
    calisto.rotationAroundOther(jupiter, 1 / (velocidadeTranslacaoTerra * 16.7))
    calisto.draw()

    saturno.rotationItSelf(1 / (velocidadeRotacaoTerra * 0.445))
    saturno.rotationZ(1 / (velocidadeTranslacaoTerra * 29.4))
    saturno.draw()
    mimas.rotationAroundOther(saturno, 1 / (velocidadeTranslacaoTerra * 0.9424218))
    mimas.draw()
    enceladus.rotationAroundOther(saturno, 1 / (velocidadeTranslacaoTerra * 1.370218))
    enceladus.draw()
    tethys.rotationAroundOther(saturno, 1 / (velocidadeTranslacaoTerra * 1.887802))
    tethys.draw()
    titan.rotationAroundOther(saturno, 1 / (velocidadeTranslacaoTerra * 15.945421))
    titan.draw()

    urano.rotationItSelf(1 / (velocidadeRotacaoTerra * -0.720))
    urano.rotationZ(1 / (velocidadeTranslacaoTerra * 83.7))
    urano.draw()
    miranda.rotationAroundOther(urano, 1 / (velocidadeTranslacaoTerra * 1.413479))
    miranda.draw()
    ariel.rotationAroundOther(urano, 1 / (velocidadeTranslacaoTerra * 2.520379))
    ariel.draw()
    titania.rotationAroundOther(urano, 1 / (velocidadeTranslacaoTerra * 8.705867))
    titania.draw()
    oberon.rotationAroundOther(urano, 1 / (velocidadeTranslacaoTerra * 13.463234))
    oberon.draw()

    netuno.rotationItSelf(1 / (velocidadeRotacaoTerra * 0.673))
    netuno.rotationZ(1 / (velocidadeTranslacaoTerra * 163.7))
    netuno.draw()
    naiad.rotationAroundOther(netuno, 1 / (velocidadeTranslacaoTerra * 0.294396))
    naiad.draw()
    galatea.rotationAroundOther(netuno, 1 / (velocidadeTranslacaoTerra * 0.428745))
    galatea.draw()
    larissa.rotationAroundOther(netuno, 1 / (velocidadeTranslacaoTerra * 0.554654))
    larissa.draw()
    proteus.rotationAroundOther(netuno, 1 / (velocidadeTranslacaoTerra * 1.122315))
    proteus.draw()

    lua.rotationZ(velocidadeTranslacaoTerra)
    phobos.rotationZ(1 / (velocidadeTranslacaoTerra * 1.88))
    deimos.rotationZ(1 / (velocidadeTranslacaoTerra * 1.88))
    io.rotationZ(1 / (velocidadeTranslacaoTerra * 11.9))
    europa.rotationZ(1 / (velocidadeTranslacaoTerra * 11.9))
    ganimedes.rotationZ(1 / (velocidadeTranslacaoTerra * 11.9))
    calisto.rotationZ(1 / (velocidadeTranslacaoTerra * 11.9))
    mimas.rotationZ(1 / (velocidadeTranslacaoTerra * 29.4))
    enceladus.rotationZ(1 / (velocidadeTranslacaoTerra * 29.4))
    tethys.rotationZ(1 / (velocidadeTranslacaoTerra * 29.4))
    titan.rotationZ(1 / (velocidadeTranslacaoTerra * 29.4))
    miranda.rotationZ(1 / (velocidadeTranslacaoTerra * 83.7))
    ariel.rotationZ(1 / (velocidadeTranslacaoTerra * 83.7))
    titania.rotationZ(1 / (velocidadeTranslacaoTerra * 83.7))
    oberon.rotationZ(1 / (velocidadeTranslacaoTerra * 83.7))
    naiad.rotationZ(1 / (velocidadeTranslacaoTerra * 163.7))
    galatea.rotationZ(1 / (velocidadeTranslacaoTerra * 163.7))
    larissa.rotationZ(1 / (velocidadeTranslacaoTerra * 163.7))
    proteus.rotationZ(1 / (velocidadeTranslacaoTerra * 163.7))
}