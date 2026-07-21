"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { business, whatsappHref } from "@/data/business";
import { pickupServiceOptions } from "@/data/services";

type FormState = {
  fullName: string;
  phone: string;
  district: string;
  address: string;
  service: string;
  date: string;
  time: string;
  details: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  phone: "",
  district: "",
  address: "",
  service: pickupServiceOptions[0],
  date: "",
  time: "",
  details: ""
};

const requiredFields: Array<keyof FormState> = [
  "fullName",
  "phone",
  "district",
  "address",
  "service",
  "date",
  "time"
];

const labels: Record<keyof FormState, string> = {
  fullName: "Nom complet",
  phone: "Numéro de téléphone",
  district: "Quartier",
  address: "Adresse ou point de repère",
  service: "Service demandé",
  date: "Date souhaitée",
  time: "Heure souhaitée",
  details: "Informations complémentaires"
};

export function PickupForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});

  const message = useMemo(
    () => `Bonjour Innov Computer Pressing,

Je souhaite programmer une collecte.

Nom : ${form.fullName}
Téléphone : ${form.phone}
Quartier : ${form.district}
Adresse : ${form.address}
Service : ${form.service}
Date souhaitée : ${form.date}
Heure souhaitée : ${form.time}
Informations complémentaires : ${form.details || "Aucune"}`,
    [form]
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function validate() {
    const nextErrors: ErrorState = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = `${labels[field]} est obligatoire.`;
      }
    });

    if (form.phone.trim() && !/^[+\d\s().-]{7,}$/.test(form.phone.trim())) {
      nextErrors.phone = "Indiquez un numéro de téléphone valide.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="surface grid gap-5 p-5 sm:p-6" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          id="fullName"
          label={labels.fullName}
          value={form.fullName}
          error={errors.fullName}
          onChange={(value) => updateField("fullName", value)}
          autoComplete="name"
        />
        <Field
          id="phone"
          label={labels.phone}
          value={form.phone}
          error={errors.phone}
          onChange={(value) => updateField("phone", value)}
          autoComplete="tel"
          inputMode="tel"
        />
        <Field
          id="district"
          label={labels.district}
          value={form.district}
          error={errors.district}
          onChange={(value) => updateField("district", value)}
        />
        <Field
          id="address"
          label={labels.address}
          value={form.address}
          error={errors.address}
          onChange={(value) => updateField("address", value)}
        />
        <div className="grid gap-2">
          <label htmlFor="service" className="form-label">
            {labels.service}
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="form-input"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            {pickupServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="text-sm font-semibold text-red-600">
              {errors.service}
            </p>
          )}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="date"
            label={labels.date}
            value={form.date}
            error={errors.date}
            onChange={(value) => updateField("date", value)}
            type="date"
          />
          <Field
            id="time"
            label={labels.time}
            value={form.time}
            error={errors.time}
            onChange={(value) => updateField("time", value)}
            type="time"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="details" className="form-label">
          {labels.details}
        </label>
        <textarea
          id="details"
          value={form.details}
          onChange={(event) => updateField("details", event.target.value)}
          className="form-input min-h-32 resize-y"
          placeholder="Type de vêtements, quantité approximative, précision utile..."
        />
      </div>

      <div className="rounded-lg bg-brand-sky p-4 text-sm leading-7 text-brand-navy">
        La demande sera envoyée sur WhatsApp au {business.primaryPhone}. Aucune information
        n’est enregistrée sur le site.
      </div>

      <button type="submit" className="button-primary w-full sm:w-fit">
        <Send aria-hidden="true" className="size-5" />
        Envoyer la demande sur WhatsApp
      </button>
    </form>
  );
}

type FieldProps = {
  id: keyof FormState;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric" | "decimal" | "search" | "url";
};

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  inputMode
}: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="form-input"
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
