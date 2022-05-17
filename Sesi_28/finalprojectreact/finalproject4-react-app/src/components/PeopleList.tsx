import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/personDebugActions'
import styled from 'styled-components'
import Header from './Header'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Link, useNavigate } from 'react-router-dom';

let Button1 = styled.div`
    margin-bottom: 20px;
    margin-left: 10px;
`

let Loading = styled.div`
    font-size: 50px;
    font-weight: thin;
    opacity: 0.5;
    text-align: center;
    margin-top:200px;
    margin-bottom:200px
`

function PeopleList({ personData, fetchPeople }: any) {
    const [key, setKey] = useState('')
    const [firstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetchPeople()
    }, [])

    const handleDelete = (key: any, firstName: any, lastName: any) => {
        setKey(key)
        setFirstName(firstName)
        setLastName(lastName)
        navigate(`/PersonDelete/${firstName}/${lastName}/${key}`)
    }

    const handleEdit = (key: any, firstName: any, lastName: any) => {
        setKey(key)
        setFirstName(firstName)
        setLastName(lastName)
        navigate(`/PersonEdit/${firstName}/${lastName}/${key}`)
    }

    const handleOne = (key: any, firstName: any, lastName: any) => {
        setKey(key)
        setFirstName(firstName)
        setLastName(lastName)
        navigate(`/PersonDetails/${firstName}/${lastName}/${key}`)
    }

    return personData.loading ? (
        <>
            <Loading>
                <span className="icon">
                    <i className="fas fa-circle-notch fa-spin"></i>
                </span>
            </Loading>
        </>
    ) : personData.error ? (
        <h2>{personData.error}</h2>
    ) : (
        <>
            <div>
                <Header title="List of People Information"></Header>
                <div className="field " style={{ textAlign: 'center' }}>
                    <Button1 className="button is-info is-focused is-centered"><Link to="/PersonForm" style={{ textDecoration: 'none', color: 'white' }} >Add New Person Information</Link></Button1>
                    <div style={{ marginRight: "15px" }}></div>
                </div>
                <div style={{ width: '700px', margin: ' 0 auto' }}>
                    <table className="table is-striped is-hoverable is-fullwidth" style={{ textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Key</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Actions</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(personData.people)
                                    .sort((a: any, b: any) => a.key > b.key ? 1 : -1)
                                    .map((person: any, index: any) => {
                                        return <tr key={index} ><td>{index + 1}</td><td>{person.key}</td><td >{person.firstName}</td><td >{person.lastName}</td>
                                        <td>
                                            <Button1 className="button is-danger is-focused is-centered" onClick={() => handleDelete(person.key, person.firstName, person.lastName)}>Delete</Button1>
                                        </td>
                                        <td>
                                                <Button1 className="button is-warning is-focused is-centered" onClick={() => handleEdit(person.key, person.firstName, person.lastName)}>Edit</Button1>
                                            </td>
                                            <td>
                                                <Button1 className="button is-primary is-focused is-centered" onClick={() => handleOne(person.key, person.firstName, person.lastName)}>Read Details</Button1>
                                            </td>
                                            </tr>
                                    })

                                            }
                            
                        </tbody>
                    </table>
                    <div style={{ marginBottom: "15px" }}></div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        personData: state.personDebug
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchPeople: () => dispatch(fetchPeople())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleList)