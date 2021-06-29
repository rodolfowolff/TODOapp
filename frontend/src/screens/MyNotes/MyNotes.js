import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Badge, Accordion } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import MainScreen from '../../components/MainScreen';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErroMessage';

import { listNotes } from '../../actions/notesActions';

const MyNotes = () => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
    }
  };

  const history = useHistory();

  useEffect(() => {
    dispatch(listNotes());

    if (!userInfo) {
      history.push('/');
    }

  }, [dispatch, history, userInfo]);

  return (
    <MainScreen title={ `Welcome ${userInfo.name}` }>
      <Link to='createnote'>
        <Button style={ { marginLeft: 10, MarginBottom: 6 } } size='lg'>
          Create a new
        </Button>
      </Link>

      { error && <ErrorMessage variant='danger'>{ error }</ErrorMessage> }

      { loading && <Loading /> }

      { notes?.map((note) => (
        <Accordion key={ note._id }>
          <Card style={ { margin: 10 } }>
            <Card.Header style={ { display: 'flex' } }>
              <span style={ {
                color: 'white',
                textDecoration: 'none',
                flex: 1,
                cursor: 'pointer',
                alignSelf: 'center',
                fontSize: 18,
              } }
              >
                <Accordion.Toggle as={ Card.Text } variant='link' eventKey='0'>
                  { note.title }
                </Accordion.Toggle>
              </span>

              <div>
                <Button href={ `/note/${note._id}` }>Edit</Button>
                <Button
                  variant='danger'
                  className='mx-2'
                  onClick={ () => deleteHandler(note._id) }
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                <h4>
                  <Badge variant='light'>
                    Category - { note.category }
                  </Badge>
                </h4>

                <blockquote className='blockquote mb-0'>
                  <p>
                    { note.content }
                  </p>
                  <footer className='blockquote-footer'>
                    Create On { " " }
                    <cite title="Source Title">
                      { note.createdAt.substring(0, 10) }
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>

          </Card>
        </Accordion>
      ))
      }
    </MainScreen>
  );
};

export default MyNotes;
