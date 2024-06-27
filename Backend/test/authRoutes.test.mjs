import { use } from "chai";
import { expect } from "chai";
import chaiHttp from "../node_modules/chai-http/lib/http.js";

import { describe, it } from "mocha";
import app from "../app.cjs";


const chai = use(chaiHttp);


describe('GET /', () => {
  it('should return hello world', (done) => {
    chai.request.execute(app).get('/')
        .end((_, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('say').to.be.a('string');
            done();
        });
  });
});