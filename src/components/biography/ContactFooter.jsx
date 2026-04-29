import React from 'react';

export default function ContactFooter({ phiKey, eagleSeal }) {
  return (
    <footer className="text-center mt-10 pb-12">
      {/* Ornate divider with diamond */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #B8963E)' }} />
        <div
          style={{
            width: '12px', height: '12px',
            background: '#B8963E',
            transform: 'rotate(45deg)',
          }}
        />
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #B8963E)' }} />
      </div>

      {/* Contact heading */}
      <h2
        className="heading-engraved mb-6"
        style={{ fontSize: '1.2rem', color: '#7D662A', letterSpacing: '0.2em' }}
      >
        Contact Information
      </h2>

      {/* Visiting card style */}
      <div
        className="inline-block px-12 py-8 mx-auto"
        style={{
          border: '1px solid #B8963E',
          boxShadow: '0 0 0 4px #FAF7F2, 0 0 0 5px #D4AF6A',
          minWidth: '320px',
        }}
      >
        {/* Seals row */}
        <div className="flex items-center justify-center gap-8 mb-5">
          <img
            src={phiKey}
            alt="Phi Beta Kappa Key"
            style={{ width: '64px', height: '86px', objectFit: 'contain' }}
          />
          <div className="text-center">
            <p
              className="font-display-sc"
              style={{ color: '#1A1714', fontSize: '1.45rem', letterSpacing: '0.08em' }}
            >
              Mrs. Patty Fattah
            </p>
            <p
              className="font-garamond italic"
              style={{ color: '#7D662A', fontSize: '1.1rem', marginTop: '2px' }}
            >
              ΦΒΚ, JD. ESQ. (Ret.)
            </p>
          </div>
          <img
            src={eagleSeal}
            alt="Official Seal"
            style={{ width: '72px', height: '72px', objectFit: 'contain', borderRadius: '50%' }}
          />
        </div>

        <div
          className="h-px w-48 mx-auto mb-4"
          style={{ background: 'linear-gradient(to right, transparent, #B8963E, transparent)' }}
        />

        <div className="font-garamond space-y-1" style={{ color: '#1A1714', fontSize: '1.15rem' }}>
          <p>4700 City Line / City Avenue · Apt. 12104</p>
          <p>Philadelphia, PA 19131 · USA</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <span>215.620.4500</span>
            <span style={{ color: '#B8963E' }}>·</span>
            <span>215.921.4050</span>
          </div>
          <p className="mt-2">
            <a
              href="https://www.PattyFattah.com"
              className="font-garamond italic"
              style={{ color: '#7D662A', textDecoration: 'underline', textDecorationColor: '#D4AF6A' }}
            >
              www.PattyFattah.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom note */}
      <p
        className="font-garamond italic mt-8"
        style={{ color: '#7D662A', fontSize: '0.82rem', letterSpacing: '0.04em' }}
      >
        White House photos courtesy of the William J. Clinton Library
      </p>

      {/* Final gold rule */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, #B8963E, transparent)' }} />
      </div>
    </footer>
  );
}
