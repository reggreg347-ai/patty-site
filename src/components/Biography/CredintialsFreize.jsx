import React from 'react';

const PhiBetaKeyIcon = ({ src }) => (
  <div className="flex flex-col items-center gap-2">
    <img
      src={src}
      alt="Phi Beta Kappa Key"
      style={{ width: '60px', height: '80px', objectFit: 'contain' }}
    />
    <span
      className="font-display-sc text-center"
      style={{ color: '#7D662A', fontSize: '0.65rem', letterSpacing: '0.1em' }}
    >
      ΦΒΚ · 1776
    </span>
  </div>
);

const EagleSealIcon = ({ src }) => (
  <div className="flex flex-col items-center gap-2">
    <img
      src={src}
      alt="Official Seal"
      style={{ width: '70px', height: '70px', objectFit: 'contain', borderRadius: '50%' }}
    />
    <span
      className="font-display-sc text-center"
      style={{ color: '#7D662A', fontSize: '0.65rem', letterSpacing: '0.1em' }}
    >
      Civic Honor
    </span>
  </div>
);

export default function CredentialsFrieze({ phiKey, eagleSeal }) {
  return (
    <div
      className="my-8 py-6 px-8 flex items-center justify-center gap-12"
      style={{
        borderTop: '1px solid #B8963E',
        borderBottom: '1px solid #B8963E',
        background: 'linear-gradient(to right, transparent, rgba(184,150,62,0.06), transparent)',
      }}
    >
      <PhiBetaKeyIcon src={phiKey} />

      {/* Center text block */}
      <div className="text-center px-4" style={{ maxWidth: '380px' }}>
        <p
          className="font-display-sc"
          style={{ color: '#7D662A', fontSize: '0.8rem', letterSpacing: '0.12em', lineHeight: 1.9 }}
        >
          Juris Doctorate · Pennsylvania Supreme Court Attorney
          <br />
          Federal Appellate Court Mayor's Assistant
          <br />
          Phi Beta Kappa Society Member · Gold Key Awardee
          <br />
          Congressional Black Caucus Scholar
        </p>
      </div>

      <EagleSealIcon src={eagleSeal} />
    </div>
  );
}
