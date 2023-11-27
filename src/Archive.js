import React, { useRef } from "react";
import styled from "styled-components";
import { Archivements } from "./utils/Archivements";
import { FiExternalLink } from "react-icons/fi";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledTableContainer = styled.div`
  margin: 50px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;

          a {
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const ArchivePage = () => {
  // const revealTitle = useRef(null);
  const revealTable = useRef(null);
  // const revealProjects = useRef([]);
  // const mainRef = useRef(false);

  // const toggleBlur = () => {
  //   mainRef.current.classList.toggle("blurBody");
  // };

  return (
    <StyledContent>
      <section
      id="achievements"
      className="py-[80px] sm:py-[100px] max-w-[1000px]   text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular overflow-x-hidden"
    >
       <div className="about-heading w-fit flex flex-row  mt-[10px] mb-[40px] ">
        <div className="text-theme-green flex items-center text-[15px] sm:text-[20px]">
          05.{" "}
        </div>
        <h1 className="text-theme-gray-light  min-w-fit ml-[10px] text-[26px] sm:text-[32px]  flex justify-center items-center font-calibreSemiBold fontFix">
        A big list of things I’ve achieved
        </h1>
      </div>
    
        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {Archivements.map((item, idx) => (
                <tr>
                  <td className="text-theme-green text-base font-semibold">
                    {item.year}
                  </td>
                  <td className="text-base text-theme-gray-deep font-semibold">
                    {item.title}
                  </td>
                  <td className="text-white font-bold">{item.description}</td>
                  {item.link !== "" && (
                    <td>
                      <a target="_blank"  rel="noreferrer" href={item.link}>
                        <FiExternalLink
                          className="text-gray-500 hover:text-theme-green"
                          size={20}
                        />
                      </a>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </StyledTableContainer>

      </section>
    </StyledContent>
  );
};

export default ArchivePage;
