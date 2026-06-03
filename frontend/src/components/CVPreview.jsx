import React from "react";

export default function CVPreview({ data, template = "simple" }) {
  return (
    <div className="border p-4 rounded-md bg-white shadow-sm max-w-2xl">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src={data?.personalInfo?.photo || "https://via.placeholder.com/80"}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">
            {data?.personalInfo?.firstName} {data?.personalInfo?.lastName}
          </h2>
          <p className="text-sm text-gray-600">
            {data?.personalInfo?.email} • {data?.personalInfo?.phone}
          </p>
          <p className="text-sm text-gray-500">{data?.personalInfo?.address}</p>
        </div>
      </div>

      {/* Summary */}
      {data?.personalInfo?.summary && (
        <section className="mt-4">
          <h3 className="font-semibold">Résumé</h3>
          <p className="text-sm text-gray-700 mt-1">{data.personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      <section className="mt-4">
        <h3 className="font-semibold">Expérience</h3>
        {data?.experiences?.length ? (
          data.experiences.map((e, i) => (
            <div key={i} className="mt-2">
              <div className="font-medium">
                {e.position} — {e.company}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(e.startDate).toLocaleDateString()} —{" "}
                {e.endDate ? new Date(e.endDate).toLocaleDateString() : "Present"}
              </div>
              <p className="text-sm mt-1">{e.description}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">Aucune expérience renseignée</p>
        )}
      </section>

      {/* Education */}
      <section className="mt-4">
        <h3 className="font-semibold">Formation</h3>
        {data?.education?.length ? (
          data.education.map((edu, i) => (
            <div key={i} className="mt-2">
              <div className="font-medium">
                {edu.school} — {edu.fieldOfStudy}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(edu.startDate).toLocaleDateString()} —{" "}
                {edu.endDate ? new Date(edu.endDate).toLocaleDateString() : "Present"}
              </div>
              <p className="text-sm mt-1">{edu.description}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">Aucune formation renseignée</p>
        )}
      </section>

      {/* Skills */}
      {data?.skills?.length > 0 && (
        <section className="mt-4">
          <h3 className="font-semibold">Compétences</h3>
          <p className="text-sm text-gray-700 mt-1">{data.skills.join(", ")}</p>
        </section>
      )}

      {/* Languages */}
      {data?.languages?.length > 0 && (
        <section className="mt-4">
          <h3 className="font-semibold">Langues</h3>
          <p className="text-sm text-gray-700 mt-1">{data.languages.join(", ")}</p>
        </section>
      )}

      {/* Interests */}
      {data?.interests?.length > 0 && (
        <section className="mt-4">
          <h3 className="font-semibold">Centres d’intérêt</h3>
          <p className="text-sm text-gray-700 mt-1">{data.interests.join(", ")}</p>
        </section>
      )}
    </div>
  );
}
