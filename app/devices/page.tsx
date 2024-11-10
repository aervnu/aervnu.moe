import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My devices",
  description: "What do I (used to) use?",
};

const page = () => {
  return (
    <div className="mx-auto text-center">
      <h1 className="mb-6">
        <strong>My devices</strong>
      </h1>
      <h1 className="text-white-600 pb-2 mb-4">
        <strong>Computers</strong>
      </h1>
      <table className="content-center">
        <thead>
          <tr className="text-white">
            <th className="p-2 border border-gray-300">Codename</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">System type</th>
            <th className="p-2 border border-gray-300">OS</th>
            <th className="p-2 border border-gray-300">CPU</th>
            <th className="p-2 border border-gray-300">Memory</th>
            <th className="p-2 border border-gray-300">GPU</th>
            <th className="p-2 border border-gray-300">Disk(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Roma</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">
              MSI B550-A PRO (MS-7C56)
            </td>
            <td className="p-2 border border-gray-300">
              Microsoft Windows 11 Pro for Workstations 24H2
            </td>
            <td className="p-2 border border-gray-300">AMD Ryzen 7 5700X3D</td>
            <td className="p-2 border border-gray-300">
              32GB (2x16GB) DDR4-3600 UDIMM (XMP)
            </td>
            <td className="p-2 border border-gray-300">
              MSI MECH 2X Radeon RX 6700XT 12GB
            </td>
            <td className="p-2 border border-gray-300">
              NSID 1: 500GB KINGSTON NV2 NVMe PCIe 4.0 x4
              <br />
              <br />
              NSID 2: 500GB KINGSTON NV2 NVMe PCIe 4.0 x4
              <br />
              <br />
              SATA P0: 500GB Samsung 870 EVO
              <br />
              <br />
              SATA P1: 128GB PLEXTOR M8V
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Milano</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">
              Supermicro H11DSI SP3
            </td>
            <td className="p-2 border border-gray-300">Proxmox VE 8.2</td>
            <td className="p-2 border border-gray-300">2x AMD EPYC 7642</td>
            <td className="p-2 border border-gray-300">
              256GB (8x32GB) DDR4-2666 ECC RDIMM
            </td>
            <td className="p-2 border border-gray-300">
              GPU 0: AMD Radeon PRO WX2100 2GB
              <br />
              <br />
              GPU 1 & 2: NVIDIA RTX A5000 2x24GB
            </td>
            <td className="p-2 border border-gray-300">
              NSID 1: 1TB WD Black SN850X NVMe PCIe 4.0 x4 (running at PCIe 3.0
              x4)
              <br />
              <br />
              SATA P0: 500GB Samsung 870 EVO
              <br />
              <br />
              RAID 5: 8x 1TB WD Ultrastar DC-HA210
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Ferrara</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">
              OCI VM.Standard.A1.Flex
            </td>
            <td className="p-2 border border-gray-300">
              Canonical Ubuntu 22.04 LTS
            </td>
            <td className="p-2 border border-gray-300">
              4-OCPU Ampere Altra AArch64
            </td>
            <td className="p-2 border border-gray-300">24GB</td>
            <td className="p-2 border border-gray-300">Red Hat Virtio-GPU</td>
            <td className="p-2 border border-gray-300">200GB block volume</td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Alessandria</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">
              ASUS VivoBook X1503ZA
            </td>
            <td className="p-2 border border-gray-300">
              Microsoft Windows 11 Pro 24H2
            </td>
            <td className="p-2 border border-gray-300">Intel Core i3-1220P</td>
            <td className="p-2 border border-gray-300">
              16GB (2x8GB) DDR4-2400 SODIMM
            </td>
            <td className="p-2 border border-gray-300">
              Intel UHD Graphics 64EU
            </td>
            <td className="p-2 border border-gray-300">
              NSID 1: 256GB Micron 2450 NVMe PCIe 4.0 x4
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Burano</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">
              Apple MacBook Pro 13&quot; 2019 (4 Thunderbolt ports)
            </td>
            <td className="p-2 border border-gray-300">
              Apple macOS Sequoia 15.1
            </td>
            <td className="p-2 border border-gray-300">Intel Core i7-8569U</td>
            <td className="p-2 border border-gray-300">
              16GB LPDDR3-2133 soldered
            </td>
            <td className="p-2 border border-gray-300">
              Intel Iris Plus 655 128MB eDRAM
            </td>
            <td className="p-2 border border-gray-300">
              512GB soldered SSD, NVMe
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Andria</td>
            <td className="p-2 border border-gray-300">Decommissioned</td>
            <td className="p-2 border border-gray-300">Gigabyte GA-B75M-D3H</td>
            <td className="p-2 border border-gray-300">
              Microsoft Windows 10 Pro 22H2
            </td>
            <td className="p-2 border border-gray-300">Intel Core i7-3770</td>
            <td className="p-2 border border-gray-300">
              16GB (4x4GB) DDR3-1600 UDIMM
            </td>
            <td className="p-2 border border-gray-300">
              NVIDIA GeForce GTX 1050 Ti 4GB
            </td>
            <td className="p-2 border border-gray-300">
              SATA P0: 250GB Samsung 870 EVO
              <br />
              <br />
              SATA P1: 128GB Lexar NS100
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Catania</td>
            <td className="p-2 border border-gray-300">Sold</td>
            <td className="p-2 border border-gray-300">Lenovo ThinkPad W541</td>
            <td className="p-2 border border-gray-300">
              Microsoft Windows 11 Pro for Workstations 23H2
            </td>
            <td className="p-2 border border-gray-300">Intel Core i7-4940XM</td>
            <td className="p-2 border border-gray-300">
              32GB (4x8GB) DDR3L-1600 SODIMM
            </td>
            <td className="p-2 border border-gray-300">
              NVIDIA Quadro K2200M 2GB
            </td>
            <td className="p-2 border border-gray-300">
              SATA P0: 500GB Samsung 870 EVO
              <br />
              <br />
              SATA P1 (Ultrabay): 250GB Samsung 860 EVO
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Trieste</td>
            <td className="p-2 border border-gray-300">Sold</td>
            <td className="p-2 border border-gray-300">
              Lenovo ThinkPad E14 Gen 2
            </td>
            <td className="p-2 border border-gray-300">
              Microsoft Windows 11 Pro 22H2
            </td>
            <td className="p-2 border border-gray-300">Intel Core i7-1165G7</td>
            <td className="p-2 border border-gray-300">
              40GB (8GB soldered DDR4-3200 + 32GB DDR4-3200 SODIMM)
            </td>
            <td className="p-2 border border-gray-300">
              Intel Iris Xe G7 96EU
            </td>
            <td className="p-2 border border-gray-300">
              NSID 1: 500GB WD Blue SN580 NVMe PCIe 4.0 x4
              <br />
              <br />
              SATA P0: 250GB Crucial MX500
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Messina</td>
            <td className="p-2 border border-gray-300">Decommissioned</td>
            <td className="p-2 border border-gray-300">Lenovo ThinkPad W510</td>
            <td className="p-2 border border-gray-300">
              Microsoft Windows 11 Pro 22H2
            </td>
            <td className="p-2 border border-gray-300">Intel Core i7-720QM</td>
            <td className="p-2 border border-gray-300">
              16GB (4x4GB) DDR3-1333 SODIMM
            </td>
            <td className="p-2 border border-gray-300">
              NVIDIA Quadro FX 880M 1GB
            </td>
            <td className="p-2 border border-gray-300">
              SATA P0: 250GB Samsung 870 EVO
              <br />
              <br />
              SATA P1 (Ultrabay): 120GB KINGSTON HyperX
            </td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Verona</td>
            <td className="p-2 border border-gray-300">Decommissioned</td>
            <td className="p-2 border border-gray-300">Lenovo ThinkPad X200</td>
            <td className="p-2 border border-gray-300">
              Microsoft Windows 11 Home 21H2
            </td>
            <td className="p-2 border border-gray-300">
              Intel Core 2 Duo P8600
            </td>
            <td className="p-2 border border-gray-300">
              6GB (2+4GB) DDR3-1066 SODIMM
            </td>
            <td className="p-2 border border-gray-300">Intel GMA 4500MHD</td>
            <td className="p-2 border border-gray-300">
              SATA P0: 250GB Samsung 870 EVO
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h1 className="text-white-600 pb-2 mb-4">
        <strong>Mobile devices</strong>
      </h1>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="text-white">
            <th className="p-2 border border-gray-300">Codename</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">System type</th>
            <th className="p-2 border border-gray-300">OS</th>
            <th className="p-2 border border-gray-300">CPU</th>
            <th className="p-2 border border-gray-300">Memory</th>
            <th className="p-2 border border-gray-300">GPU</th>
            <th className="p-2 border border-gray-300">Storage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Venezia</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">Apple iPhone SE 2020</td>
            <td className="p-2 border border-gray-300">Apple iOS 18.1</td>
            <td className="p-2 border border-gray-300">Apple A13 Bionic</td>
            <td className="p-2 border border-gray-300">3GB</td>
            <td className="p-2 border border-gray-300">Apple GPU (4 core)</td>
            <td className="p-2 border border-gray-300">64GB</td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Genova</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">Apple iPhone Xs</td>
            <td className="p-2 border border-gray-300">Apple iOS 18.1</td>
            <td className="p-2 border border-gray-300">Apple A12 Bionic</td>
            <td className="p-2 border border-gray-300">4GB</td>
            <td className="p-2 border border-gray-300">Apple GPU (4 core)</td>
            <td className="p-2 border border-gray-300">64GB</td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Napoli</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">Apple iPad Air 4</td>
            <td className="p-2 border border-gray-300">Apple iPadOS 18.1</td>
            <td className="p-2 border border-gray-300">Apple A14 Bionic</td>
            <td className="p-2 border border-gray-300">4GB</td>
            <td className="p-2 border border-gray-300">Apple GPU (4 core)</td>
            <td className="p-2 border border-gray-300">256GB</td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Torino</td>
            <td className="p-2 border border-gray-300">Decommissioned</td>
            <td className="p-2 border border-gray-300">Apple iPad Air 1</td>
            <td className="p-2 border border-gray-300">Apple iOS 12.5.7</td>
            <td className="p-2 border border-gray-300">Apple A7</td>
            <td className="p-2 border border-gray-300">1GB</td>
            <td className="p-2 border border-gray-300">PowerVR G6430</td>
            <td className="p-2 border border-gray-300">16GB</td>
          </tr>
          <tr className="bg-transparent">
            <td className="p-2 border border-gray-300">Firenze</td>
            <td className="p-2 border border-gray-300">Decommissioned</td>
            <td className="p-2 border border-gray-300">
              Microsoft Lumia 950 XL
            </td>
            <td className="p-2 border border-gray-300">
              Microsoft Windows 10 Mobile 1703
            </td>
            <td className="p-2 border border-gray-300">
              Qualcomm MSM8994 Snapdragon 810
            </td>
            <td className="p-2 border border-gray-300">3GB</td>
            <td className="p-2 border border-gray-300">Adreno 430</td>
            <td className="p-2 border border-gray-300">32GB</td>
          </tr>
        </tbody>
      </table>
      <b className="text-white">Stay tuned for more updates!</b>
    </div>
  );
};

export default page;
