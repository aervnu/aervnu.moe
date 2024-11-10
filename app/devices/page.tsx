import React from "react";

import type { Metadata } from "next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "My devices",
  description: "What do I (used to) use?",
};

type deviceTableRowProps = {
  codename: string;
  status: string;
  systemType: string;
  os: string;
  cpu: string;
  memory: string;
  gpus: Array<string>;
  disks: Array<string>;
};

function GpuCell(props: { gpus: Array<string> }) {
  if (props.gpus.length < 2) {
    return <TableCell className="w-32 text-wrap">{props.gpus}</TableCell>;
  } else {
    return (
      <TableCell className="w-4">
        <div className="flex flex-col gap-2 w-40 flex-wrap text-wrap">
          {props.gpus.map((gpu: string, index: number) => {
            return <li key={index}>{gpu}</li>;
          })}
        </div>
      </TableCell>
    );
  }
}

function DiskCell(props: { disks: Array<string> }) {
  if (props.disks.length < 2) {
    return <TableCell className="w-32 text-wrap">{props.disks}</TableCell>;
  } else {
    return (
      <TableCell>
        <div className="flex flex-col gap-2 w-32 flex-wrap text-wrap">
          {props.disks.map((disk: string, index: number) => {
            return <li key={index}>{disk}</li>;
          })}
        </div>
      </TableCell>
    );
  }
}

function DeviceTableRow(props: { device: deviceTableRowProps }) {
  return (
    <TableRow>
      <TableCell className="w-32 text-wrap">{props.device.codename}</TableCell>
      <TableCell className="w-32 text-wrap">{props.device.status}</TableCell>
      <TableCell className="w-32 text-wrap">
        {props.device.systemType}
      </TableCell>
      <TableCell className="w-32 text-wrap">{props.device.os}</TableCell>
      <TableCell className="w-32 text-wrap">{props.device.cpu}</TableCell>
      <TableCell className="w-32 text-wrap">{props.device.memory}</TableCell>
      <GpuCell gpus={props.device.gpus} />
      <DiskCell disks={props.device.disks} />
    </TableRow>
  );
}

const computers: Array<deviceTableRowProps> = [
  {
    codename: "Roma",
    status: "In commission",
    systemType: "MSI B550-A PRO (MS-7C56)",
    os: "Microsoft Windows 11 Pro for Works,tations 24H2",
    cpu: "AMD Ryzen 7 5700X3D",
    memory: "32GB (2x16GB) DDR4-3600 UDIMM (XMP)",
    gpus: ["MSI MECH 2X Radeon RX 6700XT 12GB"],
    disks: [
      "NSID 1: 500GB KINGSTON NV2 NVMe PCIe 4.0 x4",
      "NSID 2: 500GB KINGSTON NV2 NVMe PCIe 4.0 x4",
      "SATA P0: 500GB Samsung 870 EVO",
      "SATA P1: 128GB PLEXTOR M8V",
    ],
  },
  {
    codename: "Milano",
    status: "In commission",
    systemType: "Supermicro H11DSI SP3",
    os: "Proxmox VE 8.2",
    cpu: "2x AMD EPYC 7642",
    memory: "256GB (8x32GB) DDR4-2666 ECC RDIMM",
    gpus: [
      "GPU 0: AMD Radeon PRO WX2100 2GB",
      "GPU 1 & 2: NVIDIA RTX A5000 2x24GB",
    ],
    disks: [
      "NSID 1: 1TB WD Black SN850X NVMe PCIe 4.0 x4 (running at PCIe 3.0 x4)",
      "SATA P0: 500GB Samsung 870 EVO",
      "RAID 5: 8x 1TB WD Ultrastar DC-HA210",
    ],
  },
  {
    codename: "Ferrara",
    status: "In commission",
    systemType: "OCI VM.Standard.A1.Flex",
    os: "Canonical Ubuntu 22.04 LTS",
    cpu: "4-OCPU Ampere Altra AArch64",
    memory: "24GB",
    gpus: ["Red Hat Virtio-GPU"],
    disks: ["200GB block volume"],
  },
  {
    codename: "Alessandria",
    status: "In commission",
    systemType: "ASUS VivoBook X1503ZA",
    os: "Microsoft Windows 11 Pro 24H2",
    cpu: "Intel Core i3-1220P",
    memory: "16GB (2x8GB) DDR4-2400 SODIMM",
    gpus: ["Intel UHD Graphics 64EU"],
    disks: ["NSID 1: 256GB Micron 2450 NVMe PCIe 4.0 x4"],
  },
  {
    codename: "Burano",
    status: "In commission",
    systemType: 'Apple MacBook Pro 13" 2019 (4 Thunderbolt ports)',
    os: "Apple macOS Sequoia 15.1",
    cpu: "Intel Core i7-8569U",
    memory: "16GB LPDDR3-2133 soldered",
    gpus: ["Intel Iris Plus 655 128MB eDRAM"],
    disks: ["512GB soldered SSD, NVMe"],
  },
  {
    codename: "Andria",
    status: "Decommissioned",
    systemType: "Gigabyte GA-B75M-D3H",
    os: "Microsoft Windows 10 Pro 22H2",
    cpu: "Intel Core i7-3770",
    memory: "16GB (4x4GB) DDR3-1600 UDIMM",
    gpus: ["NVIDIA GeForce GTX 1050 Ti 4GB"],
    disks: ["SATA P0: 250GB Samsung 870 EVO", "SATA P1: 128GB Lexar NS100"],
  },
  {
    codename: "Catania",
    status: "Sold",
    systemType: "Lenovo ThinkPad W541",
    os: "Microsoft Windows 11 Pro for Workstations 23H2",
    cpu: "Intel Core i7-4940XM",
    memory: "32GB (4x8GB) DDR3L-1600 SODIMM",
    gpus: ["NVIDIA Quadro K2200M 2GB"],
    disks: [
      "SATA P0: 500GB Samsung 870 EVO",
      "SATA P1 (Ultrabay): 250GB Samsung 860 EVO",
    ],
  },
  {
    codename: "Trieste",
    status: "Sold",
    systemType: "Lenovo ThinkPad E14 Gen 2",
    os: "Microsoft Windows 11 Pro 22H2",
    cpu: "Intel Core i7-1165G7",
    memory: "40GB (8GB soldered DDR4-3200 + 32GB DDR4-3200 SODIMM)",
    gpus: ["Intel Iris Xe G7 96EU"],
    disks: [
      "NSID 1: 500GB WD Blue SN580 NVMe PCIe 4.0 x4",
      "SATA P0: 250GB Crucial MX500",
    ],
  },
  {
    codename: "Messina",
    status: "Decommissioned",
    systemType: "Lenovo ThinkPad W510",
    os: "Microsoft Windows 11 Pro 22H2",
    cpu: "Intel Core i7-720QM",
    memory: "16GB (4x4GB) DDR3-1333 SODIMM",
    gpus: ["NVIDIA Quadro FX 880M 1GB"],
    disks: [
      "SATA P0: 250GB Samsung 870 EVO",
      "SATA P1 (Ultrabay): 120GB KINGSTON HyperX",
    ],
  },
  {
    codename: "Verona",
    status: "Decommissioned",
    systemType: "Lenovo ThinkPad X200",
    os: "Microsoft Windows 11 Home 21H2",
    cpu: "Intel Core 2 Duo P8600",
    memory: "6GB (2+4GB) DDR3-1066 SODIMM",
    gpus: ["Intel GMA 4500MHD"],
    disks: ["SATA P0: 250GB Samsung 870 EVO"],
  },
];

const mobileDevices: Array<deviceTableRowProps> = [
  {
    codename: "Venezia",
    status: "In commission",
    systemType: "Apple iPhone SE 2020",
    os: "Apple iOS 18.1",
    cpu: "Apple A13 Bionic",
    memory: "3GB",
    gpus: ["Apple GPU (4 core)"],
    disks: ["64GB"],
  },
  {
    codename: "Genova",
    status: "In commission",
    systemType: "Apple iPhone Xs",
    os: "Apple iOS 18.1",
    cpu: "Apple A12 Bionic",
    memory: "4GB",
    gpus: ["Apple GPU (4 core)"],
    disks: ["64GB"],
  },
  {
    codename: "Napoli",
    status: "In commission",
    systemType: "Apple iPad Air 4",
    os: "Apple iPadOS 18.1",
    cpu: "Apple A14 Bionic",
    memory: "4GB",
    gpus: ["Apple GPU (4 core)"],
    disks: ["256GB"],
  },
  {
    codename: "Torino",
    status: "Decommissioned",
    systemType: "Apple iPad Air 1",
    os: "Apple iOS 12.5.7",
    cpu: "Apple A7",
    memory: "1GB",
    gpus: ["PowerVR G6430"],
    disks: ["16GB"],
  },
  {
    codename: "Firenze",
    status: "Decommissioned",
    systemType: "Microsoft Lumia 950 XL",
    os: "Microsoft Windows 10 Mobile 1703",
    cpu: "Qualcomm MSM8994 Snapdragon 810",
    memory: "3GB",
    gpus: ["Adreno 430"],
    disks: ["32GB"],
  },
];

const page = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="mb-6">
        <strong>My devices</strong>
      </h1>

      <div className="flex flex-col justify-center items-center text-center gap-12">
        <div className="w-full flex flex-col gap-3">
          <p className="font-bold text-xl w-full text-center">Computers</p>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Codename</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">System type</TableHead>
                  <TableHead className="text-center">OS</TableHead>
                  <TableHead className="text-center">CPU</TableHead>
                  <TableHead className="text-center">Memory</TableHead>
                  <TableHead className="text-center">GPU</TableHead>
                  <TableHead className="text-center">Disk(s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {computers.map((device, index: number) => (
                  <DeviceTableRow device={device} key={index} />
                ))}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="border-[1px] w-96 border-[#d9d9d9]"></div>

        <div className="w-full flex flex-col gap-3">
          <p className="font-bold text-xl w-full text-center">Mobile Devices</p>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Codename</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">System type</TableHead>
                  <TableHead className="text-center">OS</TableHead>
                  <TableHead className="text-center">CPU</TableHead>
                  <TableHead className="text-center">Memory</TableHead>
                  <TableHead className="text-center">GPU</TableHead>
                  <TableHead className="text-center">Storage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mobileDevices.map((device, index: number) => (
                  <DeviceTableRow device={device} key={index} />
                ))}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <b className="text-white">Stay tuned for more updates!</b>
      </div>
    </div>
  );
};

export default page;
