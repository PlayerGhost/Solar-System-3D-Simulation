class Line {
    constructor(x1, y1, x2, y2) {
        this.points = []

        this.points.push(new Vector(3, [x1, y1, 1]))
        this.points.push(new Vector(3, [x2, y2, 1]))
        this.color = "#000000"

        this.t = new Transformations()
    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i], dx, dy)
        }
    }

    rotation(angle) {
        this.points[0] = this.t.rotation2D(this.points[0], angle)
        this.points[1] = this.t.rotation2D(this.points[1], angle)
    }

    draw() {
        strokeWeight(3)
        stroke(this.color)
        fill(this.color)

        beginShape(LINES)

        vertex(this.points[0].get(1) / this.points[0].get(3), this.points[0].get(2) / this.points[0].get(3))
        vertex(this.points[1].get(1) / this.points[1].get(3), this.points[1].get(2) / this.points[1].get(3))
        endShape(CLOSE)
    }
}

class Rectangle {
    constructor(x, y, w, h) {
        this.points = []

        this.points.push(new Vector(3, [x, y, 1]))
        this.points.push(new Vector(3, [x + w, y, 1]))
        this.points.push(new Vector(3, [x + w, y + h, 1]))
        this.points.push(new Vector(3, [x, y + h, 1]))
        this.color = "#000000"

        this.t = new Transformations()
    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i], dx, dy)
        }
    }

    rotation(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle)
        }
    }

    draw() {
        strokeWeight(0)
        stroke(this.color)
        fill(this.color)

        beginShape(TRIANGLES)

        vertex(this.points[0].get(1) / this.points[0].get(3), this.points[0].get(2) / this.points[0].get(3))
        vertex(this.points[1].get(1) / this.points[1].get(3), this.points[1].get(2) / this.points[1].get(3))
        vertex(this.points[3].get(1) / this.points[3].get(3), this.points[3].get(2) / this.points[3].get(3))

        vertex(this.points[1].get(1) / this.points[1].get(3), this.points[1].get(2) / this.points[1].get(3))
        vertex(this.points[2].get(1) / this.points[2].get(3), this.points[2].get(2) / this.points[2].get(3))
        vertex(this.points[3].get(1) / this.points[3].get(3), this.points[3].get(2) / this.points[3].get(3))
        endShape(CLOSE)
    }
}

class Circle {
    constructor(x, y, r, t) {
        if (t < 3) throw "A quantidade de triângulos a serem desenhados deve ser maior ou igual a 3."

        this.points = []

        for (let i = 0; i < t; i++) {
            let razao = 360 / t

            let aux = []

            aux.push(new Vector(3, [x, y, 1]))
            aux.push(new Vector(3, [x + r * Math.cos(razao * i) * Math.PI / 180, y + r * Math.sin(razao * i) * Math.PI / 180, 1]))
            aux.push(new Vector(3, [x + r * Math.cos(razao * (i + 1)) * Math.PI / 180, y + r * Math.sin(razao * (i + 1)) * Math.PI / 180, 1]))

            this.points.push(aux)
        }

        this.color = "#000000"

        this.tranform = new Transformations()

        this.t = t
    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i][0] = this.tranform.translate2D(this.points[i][0], dx, dy)
            this.points[i][1] = this.tranform.translate2D(this.points[i][1], dx, dy)
            this.points[i][2] = this.tranform.translate2D(this.points[i][2], dx, dy)
        }
    }

    rotation(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i][0] = this.tranform.rotation2D(this.points[i][0], angle)
            this.points[i][1] = this.tranform.rotation2D(this.points[i][1], angle)
            this.points[i][2] = this.tranform.rotation2D(this.points[i][2], angle)
        }
    }

    draw() {
        strokeWeight(0)
        stroke(this.color)
        fill(this.color)

        beginShape(TRIANGLES)

        for (let i = 0; i < this.t; i++) {
            vertex(this.points[i][0].get(1) / this.points[i][0].get(3), this.points[i][0].get(2) / this.points[i][0].get(3))
            vertex(this.points[i][1].get(1) / this.points[i][1].get(3), this.points[i][1].get(2) / this.points[i][1].get(3))
            vertex(this.points[i][2].get(1) / this.points[i][2].get(3), this.points[i][2].get(2) / this.points[i][2].get(3))
        }

        endShape(CLOSE)
    }
}

class Triangle {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.points = []

        this.points.push(new Vector(3, [x1, y1, 1]))
        this.points.push(new Vector(3, [x2, y2, 1]))
        this.points.push(new Vector(3, [x3, y3, 1]))
        this.color = "#000000"

        this.t = new Transformations()
    }

    setColor(newColor) {
        this.color = newColor
    }

    translate(dx, dy) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i], dx, dy)
        }
    }

    rotation(angle) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle)
        }
    }

    draw() {
        strokeWeight(0)
        stroke(this.color)
        fill(this.color)

        beginShape(TRIANGLES)

        vertex(this.points[0].get(1) / this.points[0].get(3), this.points[0].get(2) / this.points[0].get(3))
        vertex(this.points[1].get(1) / this.points[1].get(3), this.points[1].get(2) / this.points[1].get(3))
        vertex(this.points[2].get(1) / this.points[2].get(3), this.points[2].get(2) / this.points[2].get(3))

        endShape(CLOSE)
    }
}