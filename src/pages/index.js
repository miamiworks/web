import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"

export default function Home() {
    return (
        <Layout bodyClass="home">
            <Section className="home-hero">
                <h1>Find a new career in Miami Tech</h1>
                <h2>Fast track to a job through curated education pathways</h2>
            </Section>
        </Layout>
    )
}
