--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: data_space; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE data_space (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    display_name character varying(80) NOT NULL,
    user_id_owner uuid NOT NULL
);


ALTER TABLE data_space OWNER TO postgres;

--
-- Name: data_space_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE data_space_users (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    user_id uuid,
    data_space_id uuid,
    role_owner boolean DEFAULT false NOT NULL,
    role_admin boolean DEFAULT false,
    password_salt character(16) NOT NULL,
    password_hash character(64) NOT NULL,
    password_interations integer NOT NULL
);


ALTER TABLE data_space_users OWNER TO postgres;

--
-- Name: COLUMN data_space_users.password_salt; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN data_space_users.password_salt IS '64 bytes in HEX';


--
-- Name: COLUMN data_space_users.password_hash; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN data_space_users.password_hash IS '256 bytes in HEX';


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "user" (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    password_hash character varying(255) NOT NULL,
    password_salt character varying(255) NOT NULL,
    email character varying(255) NOT NULL
);


ALTER TABLE "user" OWNER TO postgres;

--
-- Name: data_space data_space_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY data_space
    ADD CONSTRAINT data_space_pkey PRIMARY KEY (id);


--
-- Name: data_space_users data_space_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY data_space_users
    ADD CONSTRAINT data_space_users_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: data_space_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX data_space_id_uindex ON data_space USING btree (id);


--
-- Name: user_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX user_id_uindex ON "user" USING btree (id);


--
-- Name: data_space data_space_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY data_space
    ADD CONSTRAINT data_space_user_id_fk FOREIGN KEY (user_id_owner) REFERENCES "user"(id);


--
-- PostgreSQL database dump complete
--

