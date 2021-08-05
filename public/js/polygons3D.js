class Plane {
    constructor(x, y, z, w, h, l) {
        this.points = []

        this.points.push(new Vector(4, [x, y, z, 1]))
        this.points.push(new Vector(4, [x + w, y, z, 1]))
        this.points.push(new Vector(4, [x + w, y + h, z, 1]))
        this.points.push(new Vector(4, [x, y + h, z, 1]))

        this.points.push(new Vector(4, [x, y, z - l, 1]))
        this.points.push(new Vector(4, [x + w, y, z - l, 1]))
        this.points.push(new Vector(4, [x + w, y + h, z - l, 1]))
        this.points.push(new Vector(4, [x, y + h, z - l, 1]))

        this.color = "#000000"

        this.t = new Transformations()
    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz)
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle)
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle)
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle)
        }
    }

    draw() {
        strokeWeight(1)
        stroke(this.color)
        fill(this.color)

        beginShape(TRIANGLES)

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))

        endShape(CLOSE)
    }
}

class Parallelogram {
    constructor(x, y, z, w, h, l) {
        this.points = []

        this.points.push(new Vector(4, [x, y, z, 1]))
        this.points.push(new Vector(4, [x + w, y, z, 1]))
        this.points.push(new Vector(4, [x + w, y + h, z, 1]))
        this.points.push(new Vector(4, [x, y + h, z, 1]))

        this.points.push(new Vector(4, [x, y, z - l, 1]))
        this.points.push(new Vector(4, [x + w, y, z - l, 1]))
        this.points.push(new Vector(4, [x + w, y + h, z - l, 1]))
        this.points.push(new Vector(4, [x, y + h, z - l, 1]))

        this.color = "#000000"

        this.t = new Transformations()
    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz)
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle)
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle)
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle)
        }
    }

    draw() {
        strokeWeight(1)
        stroke(this.color)
        fill(this.color)

        beginShape(TRIANGLES)

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))

        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3))
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3))

        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3))
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3))
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3))

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))

        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3))
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3))
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3))

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3))

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3))

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3))

        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3))
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3))

        endShape(CLOSE)
    }
}

class Sphere {
    constructor(x, y, z, r, st, se) {
        this.st = st
        this.se = se
        this.points = []
        this.xy
        this.x
        this.y
        this.z

        this.sectorStep = 2 * Math.PI / se
        this.stackStep = Math.PI / st
        this.sectorAngle
        this.stackAngle
        this.points.push(new Vector(4, [0, 0, 0, 1]))

        for (let i = 0; i <= st + 1; ++i) {
            this.stackAngle = Math.PI / 2 - i * this.stackStep
            this.xy = r * Math.cos(this.stackAngle)
            this.z = r * Math.sin(this.stackAngle)

            for (let j = 0; j <= se; ++j) {
                this.sectorAngle = j * this.sectorStep

                this.x = this.xy * Math.cos(this.sectorAngle)
                this.y = this.xy * Math.sin(this.sectorAngle)
                this.points.push(new Vector(4, [this.x, this.y, this.z, 1]))
            }
        }

        this.color = "#000000"

        this.t = new Transformations()

        this.translate(x, y, z)
    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz)
        }
    }

    rotationItSelf(angle) {
        let aux = this.points[0]

        this.translate(0 - aux.get(1), 0 - aux.get(2), 0 - aux.get(3))
        this.rotationZ(angle)
        this.translate(aux.get(1), aux.get(2), aux.get(3))
    }

    rotationAroundOther(sphere, angle) {
        let aux = this.points[0]
        let aux1 = sphere.points[0]

        this.translate((aux.get(1) - aux1.get(1)) - aux.get(1), (aux.get(2) - aux1.get(2)) - aux.get(2), (aux.get(3) - aux1.get(3)) - aux.get(3))
        this.rotationZ(angle)
        this.translate(aux1.get(1), aux1.get(2), aux1.get(3))
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle)
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle)
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle)
        }
    }

    draw() {
        strokeWeight(0)
        stroke(this.color)
        fill(this.color)

        beginShape(TRIANGLES)

        let k1, k2

        for (let i = 0; i < this.st + 1; ++i) {
            k1 = i * (this.se + 1)
            k2 = k1 + this.se + 1

            for (let j = 0; j < this.se + 1; ++j, ++k1, ++k2) {
                if (i != 0) {
                    vertex(this.points[k1].get(1), this.points[k1].get(2), this.points[k1].get(3))
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3))
                    vertex(this.points[k1 + 1].get(1), this.points[k1 + 1].get(2), this.points[k1 + 1].get(3))
                }

                if (i != (this.st - 1)) {
                    vertex(this.points[k1 + 1].get(1), this.points[k1 + 1].get(2), this.points[k1 + 1].get(3))
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3))
                    vertex(this.points[k2 + 1].get(1), this.points[k2 + 1].get(2), this.points[k2 + 1].get(3))
                }
            }
        }

        endShape(CLOSE)
    }
}

class Pyramid {
    constructor(x, y, z, w, h, l, hp) {
        this.points = []

        this.points.push(new Vector(4, [x, y, z, 1]))
        this.points.push(new Vector(4, [x + w, y, z, 1]))
        this.points.push(new Vector(4, [x + w, y, z - l, 1]))
        this.points.push(new Vector(4, [x, y, z - l, 1]))
        this.points.push(new Vector(4, [x + (l / 2), y - hp, z - (w / 2), 1]))

        this.color = "#000000"

        this.t = new Transformations()
    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy, dz) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i], dx, dy, dz)
        }
    }

    rotationX(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dx(this.points[i], angle)
        }
    }

    rotationY(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dy(this.points[i], angle)
        }
    }

    rotationZ(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3Dz(this.points[i], angle)
        }
    }

    draw() {
        strokeWeight(1)
        stroke("#000000")
        fill(this.color)

        beginShape(TRIANGLES)

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3))
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))

        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3))
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3))
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3))
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3))

        endShape(CLOSE)
    }
}