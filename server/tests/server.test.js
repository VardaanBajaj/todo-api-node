const expect=require('expect');
const request=require('supertest');

const {app}=require('./../server');
const {Todo}=require('./../models/todo');

// making sure that database is empty (setting up database)
beforeEach((done)=> {
  Todo.remove({}).then(()=>{
    done();
  });
});
// describe for all routes
describe('POST /todos', ()=> {
  it('should create a new Todo', (done)=>{
    var text='Test todo text';

    // making POSt request using supertest
    request(app)
      .post('/todos')
      .send({text}) // supertest converts object to json
      .expect(200)
      .expect((res)=>{
        expect(res.body.text).toBe(text);
      })
      .end((err,res)=>{
        if(err) {
          return done(err);
        }
      // making request to database
        Todo.find().then((todos)=>{
          expect(todos.length).toBe(1);     // since datatasbe has been emptied earlier
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e)=>done(e));
      });
    });  // allows us to handle errors
      it('should not create todo with invalid body data', (done)=>{

        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res)=>{
          if(err){
            return done(err);
          }
           Todo.find().then((todos)=>{
             expect(todos.length).toBe(0);
             done();
           }).catch((e)=>done());
        });
     });
});
