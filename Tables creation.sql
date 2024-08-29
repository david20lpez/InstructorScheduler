-- Table: public.instructor

-- DROP TABLE IF EXISTS public.instructor;

CREATE TABLE IF NOT EXISTS public.instructor
(
    trainer_id character varying(15) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(20) COLLATE pg_catalog."default",
    last_name character varying(20) COLLATE pg_catalog."default",
    birthday date,
    CONSTRAINT instructor_pkey PRIMARY KEY (trainer_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.instructor
    OWNER to postgres;

-------------------------------------------------------------------------------

-- Table: public.trainer_event

-- DROP TABLE IF EXISTS public.trainer_event;

CREATE TABLE IF NOT EXISTS public.trainer_event
(
    event_id integer,
    event_name character varying(30) COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    created_at timestamp without time zone,
    modified_at timestamp without time zone,
    trainer_id character varying(15) COLLATE pg_catalog."default",
    CONSTRAINT trainer_event_trainer_id_fkey FOREIGN KEY (trainer_id)
        REFERENCES public.instructor (trainer_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.trainer_event
    OWNER to postgres;